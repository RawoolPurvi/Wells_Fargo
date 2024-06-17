// src/hooks/useATMWithdrawalFees.js
import branches from '../data/mockData';

const useATMWithdrawalFees = (location, startDate, endDate) => {
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

        const totalFees = filteredTransactions
          .filter(t => t.type === "ATM")
          .reduce((sum, t) => sum + (t.fee || 0), 0);

        return {
          category: customer.category,
          name: customer.name,
          totalFees: totalFees,
        };
      });
    });
    return stats.flat();
  } else {
    return [];
  }
};

export default useATMWithdrawalFees;
