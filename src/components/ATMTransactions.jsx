import React, { useState } from 'react';
import useATMTransactions from '../hooks/useATMTransactions';

const ATMTransactions = () => {
  const [location, setLocation] = useState("California - Los Angeles");
  const [startDate, setStartDate] = useState("2023-04-01");
  const [endDate, setEndDate] = useState("2023-06-30");
  const [category, setCategory] = useState("Gold");
  const [data, setData] = useState([]);
  const fetchATMData = useATMTransactions;

  const handleFetchData = () => {
    const result = fetchATMData(location, startDate, endDate);
    setData(result);
  };

  // Filter data by selected category
  const filteredData = data.filter(item => item.category === category);

  return (
    <div>
      <h2>ATM Transactions</h2>
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
              <th>Name</th>
              <th>Count</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.volume}</td>
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

export default ATMTransactions;
