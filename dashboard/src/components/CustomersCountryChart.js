import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function CustomersCountryChart() {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['Customers.count'],
    dimensions: ['Customers.country']
  });

  if (isLoading) return <p>Loading customers country chart...</p>;
  if (error) return <p>Error loading customers country chart</p>;
  if (!resultSet) return <p>No data available yet.</p>;

  const data = resultSet.tablePivot().map(item => ({
    country: item['Customers.country'],
    count: Number(item['Customers.count'])
  }));

  return (
    <div>
      <h2>Customers by Country</h2>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
}

export default CustomersCountryChart;