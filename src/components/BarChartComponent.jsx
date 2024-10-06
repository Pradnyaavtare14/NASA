// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const barData = [
  { name: 'Renewable', value: 400 },
  { name: 'Fossil Fuels', value: 300 },
  { name: 'Nuclear', value: 200 },
  { name: 'Hydro', value: 100 },
];

const BarChartComponent = () => (
  <BarChart width={500} height={300} data={barData}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>
);

export default BarChartComponent;