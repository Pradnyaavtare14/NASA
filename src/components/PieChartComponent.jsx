// import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Define your custom data values
const data = [
  { name: 'Gujarat', value: 400 },
  { name: 'Rajasthan', value: 300 },
  { name: 'Maharashtra', value: 200 },
  { name: 'Delhi', value: 100 },
];

// Define custom colors for each segment of the pie chart
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}} fill={COLORS[index % COLORS.length]`} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;