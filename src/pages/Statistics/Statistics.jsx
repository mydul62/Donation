import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import useDonationData from '../../Hooks/useDonationData';
import { saveDonation } from '../../Hooks/Localstorage/Localstorage';
import UseLocalStorageData from '../../Hooks/UseLocalStorageData/UseLocalStorageData';

const Statistics = () => {
  const { data:Donate } = useDonationData();
  const {donation}=UseLocalStorageData()
  const data = [
    { name: 'Your Donation', value: Donate.length },
    { name: 'Available Donation', value: donation.length - Donate.length },
  ];
  const COLORS = ['#0088FE', '#00C49F'];
  console.log(Donate.length );
  console.log(donation.length);
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  return (
    <div style={{
      width:"100%",
      height:"80vh"
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;