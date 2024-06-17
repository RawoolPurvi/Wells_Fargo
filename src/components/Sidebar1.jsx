
import React from 'react';
import './style.css';
function Sidebar1({ setActiveComponent }) {
  return (
    <div className='bg-white sidebar'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill'></i>
        <span className='brand-name fs-4'>Wells Frago</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2' onClick={() => setActiveComponent('CustomerStatistics')}>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-5'>Customer Statistics</span>
        </a>
        <a className='list-group-item py-2 my-1' onClick={() => setActiveComponent('ATMTransactions')}>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>ATM Transactions</span>
        </a>
        <a className='list-group-item py-2 my-1' onClick={() => setActiveComponent('MutualFundVsRD')}>
          <i className='bi bi-table fs-5 me-3'></i>
          <span className='fs-5'>Mutual Funds VS RD</span>
        </a>
        <a className='list-group-item py-2 my-1' onClick={() => setActiveComponent('ATMEithdrawalFees')}>
          <i className='bi bi-clipboard fs-5 me-3'></i>
          <span className='fs-5'>ATM Withdrawal</span>
        </a>
        {/* <a className='list-group-item py-2 my-1' onClick={() => setActiveComponent('LogOut')}>
          <i className='bi bi-logout fs-5 me-3'></i>
          <span className='fs-5'>Log Out</span>
        </a> */}
      </div>
    </div>
  );
}
export default Sidebar1;