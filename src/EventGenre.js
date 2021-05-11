import { setCustomData } from 'atatus-spa';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node.js', 'Jquery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => {
        const summaryArray = summary.split(' ');
        return summaryArray.includes(genre);
      }).length;
      return { name: genre, value };
    });
    return data;
  };

  return (
    // There are three kinds of Angular(AngularJs, Angular, AngularJS-Remote).
    // Search the way of those as 'AngularJS'
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) => {
            return `${name} ${(percent * 100).toFixed(0)}%`;
          }}></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
