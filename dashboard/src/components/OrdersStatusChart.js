import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function OrdersStatusChart({ startDate, endDate }) {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['Orders.count'],
    dimensions: ['Orders.status'],
    timeDimensions: [
      {
        dimension: 'Orders.orderDate',
        dateRange: [startDate, endDate]
      }
    ]
  });

  if (isLoading) return <p>Loading orders status chart...</p>;
  if (error) return <p>Error loading orders status chart: {error.toString()}</p>;
  if (!resultSet) return <p>No data available yet.</p>;

  const data = resultSet.tablePivot().map((item) => ({
    status: item['Orders.status'],
    count: Number(item['Orders.count'] || 0)
  }));

  return (
    <div>
      <h2>Orders by Status</h2>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
}

export default OrdersStatusChart;