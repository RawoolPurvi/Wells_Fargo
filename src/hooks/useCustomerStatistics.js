// // src/hooks/useCustomerStatistics.js
// import { useState, useEffect } from 'react';
// import branches from '../data/mockData';

// const useCustomerStatistics = (location, branchName) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const filteredBranches = branches.filter(branch => branch.location === location);

//     if (filteredBranches.length > 0) {
//       // const selectedBranch = filteredBranches[0];

//       const stats = filteredBranches.map((selectedBranch) => {
//         return selectedBranch.customers.map(customer => ({
//           category: customer.category,
//           name: customer.name,
//           TD: customer.transactions.filter(t => t.type === "TD").reduce((sum, t) => sum + t.amount, 0),
//           RD: customer.transactions.filter(t => t.type === "RD").reduce((sum, t) => sum + t.amount, 0),
//         }));
//       })
//       setData(stats.flat());
//     } else {
//       setData([]);
//     }
//   }, [location, branchName]);

//   return data;
// };

// export default useCustomerStatistics;

import { useState, useEffect } from 'react';
import branches from '../data/mockData';

const useCustomerStatistics = (location, fetchTrigger) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredBranches = branches.filter(branch => branch.location === location);

    if (filteredBranches.length > 0) {
      const stats = filteredBranches.map(selectedBranch => 
        selectedBranch.customers.map(customer => ({
          category: customer.category,
          name: customer.name,
          TD: customer.transactions.filter(t => t.type === "TD").reduce((sum, t) => sum + t.amount, 0),
          RD: customer.transactions.filter(t => t.type === "RD").reduce((sum, t) => sum + t.amount, 0),
        }))
      );
      setData(stats.flat());
    } else {
      setData([]);
    }
  }, [location, fetchTrigger]);  // Add fetchTrigger to dependency array

  return data;
};

export default useCustomerStatistics;
