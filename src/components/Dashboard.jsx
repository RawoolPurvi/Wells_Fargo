
import React, { useState } from 'react';
import ATMTransactions from './ATMTransactions';
import ATMWithdrawalFees from './ATMWithdrawalFees';
import MutualFundVsRD from './MutualFundVsRD';
import Sidebar1 from './Sidebar1';
import CustomerStatistics from './CustomerStatistics';
import Login from '../Login';
function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('ATMTransaction');
  const renderComponent = () => {
    switch (activeComponent) {
      case 'CustomerStatistics':
        return <CustomerStatistics />;
      case 'ATMTransactions':
        return <ATMTransactions />;
      case 'MutualFundVsRD':
        return <MutualFundVsRD />;
      case 'ATMEithdrawalFees':
        return <ATMWithdrawalFees />;
     
      default:
        return < null/>;
    }
  };
  return (
    <div className="dashboard">
      <Sidebar1 setActiveComponent={setActiveComponent} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}
export default Dashboard;