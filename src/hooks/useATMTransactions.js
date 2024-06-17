  
  
  // // src/hooks/useATMTransactions.js
  // import { useState, useEffect } from 'react';
  // import branches from '../data/mockData';
  
  // const useATMTransactions = (location, branchName) => {
  //   const [data, setData] = useState({ count: 0, volume: 0 });
  
  //   useEffect(() => {
  //     const filteredBranches = branches.filter(branch => branch.location === location);
  //     const selectedBranch = filteredBranches.find(branch => branch.branches.includes(branchName));
      
  //     if (selectedBranch) {
  //       const transactions = selectedBranch.customers.flatMap(customer => customer.transactions.filter(transaction => transaction.type === "ATM"));
  //       const count = transactions.length;
  //       const volume = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  
  //       setData({ count, volume });
  //     }
  //   }, [location, branchName]);
  
  //   return data;
  // };
  
  // export default useATMTransactions;
  
  
  // src/hooks/useATMTransactions.js
import branches from '../data/mockData';

const useATMTransactions = (location, startDate, endDate) => {
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

        const count = filteredTransactions.filter(t => t.type === "ATM").length;
        const volume = filteredTransactions.filter(t => t.type === "ATM").reduce((sum, t) => sum + t.amount, 0);

        return {
          category: customer.category,
          name: customer.name,
          count: count,
          volume: volume,
        };
      });
    });
    return stats.flat();
  } else {
    return [];
  }
};

export default useATMTransactions;
