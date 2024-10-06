// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const lineData = [
  { name: '2020', value: 100 },
  { name: '2021', value: 300 },
  { name: '2022', value: 200 },
  { name: '2023', value: 400 },
];

const LineChartComponent = () => (
  <LineChart width={500} height={300} data={lineData}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
  </LineChart>
);

export default LineChartComponent;