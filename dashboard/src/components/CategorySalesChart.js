import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import {
  PieChart, Pie, Tooltip, Legend, Cell
} from 'recharts';

function CategorySalesChart({ startDate, endDate }) {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['OrderItems.grossRevenue'],
    dimensions: ['Products.category'],
    timeDimensions: [
      {
        dimension: 'Orders.orderDate',
        dateRange: [startDate, endDate]
      }
    ]
  });

  if (isLoading) return <p>Loading category sales chart...</p>;
  if (error) return <p>Error loading category sales chart</p>;
  if (!resultSet) return <p>No data available yet.</p>;

  const data = resultSet.tablePivot().map(item => ({
    name: item['Products.category'],
    value: Number(item['OrderItems.grossRevenue'])
  }));

  return (
    <div>
      <h2>Sales by Category</h2>
      <PieChart width={800} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          dataKey="value"
          nameKey="name"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default CategorySalesChart;