import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function RevenueChart({ startDate, endDate }) {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['OrderItems.grossRevenue'],
    timeDimensions: [
      {
        dimension: 'Orders.orderDate',
        granularity: 'month',
        dateRange: [startDate, endDate]
      }
    ]
  });

  if (isLoading) return <p>Loading revenue chart...</p>;
  if (error) return <p>Error loading revenue chart</p>;
  if (!resultSet) return <p>No data available yet.</p>;

  const data = resultSet.chartPivot().map(item => ({
    x: item.x,
    revenue: Number(item['OrderItems.grossRevenue'])
  }));

  return (
    <div>
      <h2>Revenue Over Time</h2>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" />
      </LineChart>
    </div>
  );
}

export default RevenueChart;