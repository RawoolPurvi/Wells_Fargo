// // src/components/CustomerStatistics.jsx
// import React, { useState } from 'react';
// import useCustomerStatistics from '../hooks/useCustomerStatistics';

// const CustomerStatistics = () => {
//   const [location, setLocation] = useState("California");
//   const [branchName, setBranchName] = useState("Branch - 1");
//   const data = useCustomerStatistics(location, branchName);

//   return (
//     <div>
//       <h2>Customer Statistics</h2>
//       <label>
//         Location:
//         <select value={location} onChange={(e) => setLocation(e.target.value)}>
//           <option value="California - Los Angeles">California - Los Angeles</option>
//           <option value="California - San Francisco">California - San Francisco</option>
//           <option value="California - San Diego">California - San Diego</option>
//           <option value="New York - Manhattan">New York - Manhattan</option>
//           <option value="New York - Brooklyn">New York - Brooklyn</option>
//           <option value="New York - Queens">New York - Queens</option>
//           <option value="Washington DC - George Town">Washinton DC - George Town</option>
//           <option value="Washington DC - Shaw">Washinton DC - Shaw</option>
//           <option value="Washington DC - Penn Quarter">Washinton DC - Penn Quarter</option>
//         </select>
//       </label>
//       {/* <label>
//         Branch:
//         <select value={branchName} onChange={(e) => setBranchName(e.target.value)}>
//           <option value="Branch - 1">Branch - 1</option>
//           <option value="Branch - 2">Branch - 2</option>
//           <option value="Branch - 3">Branch - 3</option>
//         </select>
//       </label> */}
//       {data.length > 0 ? (
//         data.map((item, index) => (
//           <div key={index}>
//             <h3>{item.category}</h3>
//             <ul>
//               <li>{item.name}: TD = {item.TD}, RD = {item.RD}</li>
              
//               {/* filter and map */}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <p>No data available for the selected location and branch.</p>
//       )}
//     </div>
//   );
// };

// export default CustomerStatistics;
import React, { useState } from 'react';
import useCustomerStatistics from '../hooks/useCustomerStatistics';

const CustomerStatistics = () => {
  const [location, setLocation] = useState("California - Los Angeles");
  const [startDate, setStartDate] = useState("2023-04-01");
  const [endDate, setEndDate] = useState("2023-06-30");
  const [category, setCategory] = useState("Gold");
  const [fetchTrigger, setFetchTrigger] = useState(false);

  // Use the hook to fetch data based on current state
  const data = useCustomerStatistics(location, fetchTrigger);

  // Filter data by selected category
  const filteredData = data.filter(item => item.category === category);

  const handleFetchData = () => {
    // This will trigger the useEffect in the custom hook
    setFetchTrigger(prev => !prev);
  };

  // Log the data to ensure it's being fetched
  console.log('Fetched data:', data);

  return (
    <div>
      <h2>Customer Statistics</h2>
      <label>
        Location:
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="California - Los Angeles">California - Los Angeles</option>
          <option value="California - San Francisco">California - San Francisco</option>
          <option value="California - San Diego">California - San Diego</option>
          <option value="New York - Manhattan">New York - Manhattan</option>
          <option value="New York - Brooklyn">New York - Brooklyn</option>
          <option value="New York - Queens">New York - Queens</option>
          <option value="Washington DC - George Town">Washington DC - George Town</option>
          <option value="Washington DC - Shaw">Washington DC - Shaw</option>
          <option value="Washington DC - Penn Quarter">Washington DC - Penn Quarter</option>
        </select>
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Gold">Gold</option>
          <option value="Exclusive">Exclusive</option>
          <option value="Premium">Premium</option>
        </select>
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleFetchData}>Get Output</button>
      {filteredData.length > 0 ? (
        <table border="1" width="50%" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>TD</th>
              <th>RD</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.TD}</td>
                <td>{item.RD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for the selected location, date range, and category.</p>
      )}
    </div>
  );
};

export default CustomerStatistics;
