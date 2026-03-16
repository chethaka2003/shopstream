import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function FunnelChart({ startDate, endDate }) {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: [
      'Events.pageViews',
      'Events.productViews',
      'Events.addToCart',
      'Events.checkoutStart',
      'Events.purchases'
    ],
    timeDimensions: [
      {
        dimension: 'Events.eventTime',
        dateRange: [startDate, endDate]
      }
    ]
  });

  if (isLoading) return <p>Loading funnel chart...</p>;
  if (error) return <p>Error loading funnel chart: {error.toString()}</p>;
  if (!resultSet) return <p>No data available yet.</p>;

  const rows = resultSet.tablePivot();
  const row = rows[0] || {};

  const data = [
    { stage: 'Page View', count: Number(row['Events.pageViews'] || 0) },
    { stage: 'Product View', count: Number(row['Events.productViews'] || 0) },
    { stage: 'Add To Cart', count: Number(row['Events.addToCart'] || 0) },
    { stage: 'Checkout Start', count: Number(row['Events.checkoutStart'] || 0) },
    { stage: 'Purchase', count: Number(row['Events.purchases'] || 0) }
  ];

  return (
    <div>
      <h2>Event Funnel</h2>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stage" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  );
}

export default FunnelChart;