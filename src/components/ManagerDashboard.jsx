

//4th component
// src/components/ManagerDashboard.jsx
import React, { useState } from 'react';
import CustomerStatistics from './CustomerStatistics';
import ATMTransactions from './ATMTransactions';
import MutualFundVsRD from './MutualFundVsRD';
import ATMWithdrawalFees from './ATMWithdrawalFees';
import branches from '../data/mockData';
import { Dropdown } from 'bootstrap';

const ManagerDashboard = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerCategory, setCustomerCategory] = useState('Gold');
  const [transactionType, setTransactionType] = useState('TD');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionFee, setTransactionFee] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      type: transactionType,
      amount: parseFloat(transactionAmount),
      fee: parseFloat(transactionFee),
    };

    const branch = branches.find(branch => branch.location === 'California' && branch.branches.includes('Branch - 1'));
    const customer = branch.customers.find(cust => cust.name === customerName);
    
    if (customer) {
      customer.transactions.push(newTransaction);
    } else {
      branch.customers.push({
        name: customerName,
        category: customerCategory,
        transactions: [newTransaction],
      });
    }

    setCustomerName('');
    setTransactionAmount('');
    setTransactionFee('');
  };

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <CustomerStatistics />
      <ATMTransactions />
      <MutualFundVsRD />
      <ATMWithdrawalFees />
      </div>
      )
      
    }


export default ManagerDashboard;
