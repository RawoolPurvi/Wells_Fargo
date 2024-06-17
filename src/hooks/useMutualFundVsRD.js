
// //4th hook
// // src/hooks/useMutualFundVsRD.js
// import { useState, useEffect } from 'react';
// import branches from '../data/mockData';

// const useMutualFundVsRD = (location, branchName) => {
//   const [data, setData] = useState({ MF: 0, RD: 0 });

//   useEffect(() => {
//     const filteredBranches = branches.filter(branch => branch.location === location);
//     const selectedBranch = filteredBranches.find(branch => branch.branches.includes(branchName));
    
//     if (selectedBranch) {
//       const transactions = selectedBranch.customers.flatMap(customer => customer.transactions);
//       const MF = transactions.filter(transaction => transaction.type === "MF").reduce((sum, transaction) => sum + transaction.amount, 0);
//       const RD = transactions.filter(transaction => transaction.type === "RD").reduce((sum, transaction) => sum + transaction.amount, 0);

//       setData({ MF, RD });
//     }
//   }, [location, branchName]);

//   return data;
// };

// export default useMutualFundVsRD;



// src/hooks/useMutualFundVsRD.js
import branches from '../data/mockData';

const useMutualFundVsRD = (location, startDate, endDate) => {
  const filteredBranches = branches.filter(branch => branch.location === location);

  if (filteredBranches.length > 0) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const stats = filteredBranches.map((selectedBranch) => {
      return selectedBranch.customers.map(customer => {
        const filteredTransactions = customer.transactions.filter(transaction => {
          if (!transaction.transaction_date) {
            return false;
          }
          const transactionDate = new Date(transaction.transaction_date.split('-').reverse().join('-'));
          return transactionDate >= start && transactionDate <= end;
        });

        const MFVolume = filteredTransactions.filter(t => t.type === "MF").reduce((sum, t) => sum + t.amount, 0);
        const RDVolume = filteredTransactions.filter(t => t.type === "RD").reduce((sum, t) => sum + t.amount, 0);

        return {
          category: customer.category,
          name: customer.name,
          MF: MFVolume,
          RD: RDVolume,
        };
      });
    });
    return stats.flat();
  } else {
    return [];
  }
};

export default useMutualFundVsRD;
