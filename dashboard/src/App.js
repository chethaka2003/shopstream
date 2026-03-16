import React, { useState } from 'react';
import RevenueChart from './components/RevenueChart';
import OrdersStatusChart from './components/OrdersStatusChart';
import CategorySalesChart from './components/CategorySalesChart';
import CustomersCountryChart from './components/CustomersCountryChart';
import FunnelChart from './components/FunnelChart';

function App() {
  const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>ShopStream Analytics Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label style={{ marginLeft: '20px' }}>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <RevenueChart startDate={startDate} endDate={endDate} />
      <OrdersStatusChart startDate={startDate} endDate={endDate} />
      <CategorySalesChart startDate={startDate} endDate={endDate} />
      <CustomersCountryChart />
      <FunnelChart startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;