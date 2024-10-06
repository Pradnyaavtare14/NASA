// import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const areaData = [
  { name: 'January', value: 240 },
  { name: 'February', value: 300 },
  { name: 'March', value: 200 },
  { name: 'April', value: 278 },
];

const AreaChartComponent = () => (
  <AreaChart width={500} height={300} data={areaData}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
);

export default AreaChartComponent;