import { setCustomData } from 'atatus-spa';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => {
        return summary.split(' ').includes(genre);
      }).length;
      return { name: genre, value };
    });
    return data;
  };

  const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'];

  return (
    // There are three kinds of Angular(AngularJs, Angular, AngularJS-Remote).
    // Search the way of those as 'AngularJS'
    <ResponsiveContainer className='pie-chart' height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={'50%'}
          cy={'50%'}
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) => {
            return `${name} ${(percent * 100).toFixed(0)}%`;
          }}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index]}
              name={entry.name}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
