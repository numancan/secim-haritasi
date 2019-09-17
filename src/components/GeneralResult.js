import React, { useState } from 'react';
import { sumOf, getPartysColor, round, formatNumber } from '../helpers';
import PieChart from 'react-minimal-pie-chart';
import styles from './GeneralResult.module.css';
import data from '../data/secim.json';
import Bar from './Bar.js';

const GeneralResult = () => {
  let totalPartysVotes = { 'AK Parti': 0, CHP: 0, MHP: 0, Diger: 0 };
  const [chartData, setChartData] = useState();

  const totalVote = data
    .map(province => sumOf(province.results))
    .reduce((a, b) => a + b, 0);

  // Calculate partys' vote
  data.forEach(province => {
    province.results.forEach(({ name, voteCount }) => {
      if (Object.keys(totalPartysVotes).includes(name))
        totalPartysVotes[name] += parseInt(voteCount);
      else totalPartysVotes.Diger += parseInt(voteCount);
    });
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Türkiye Geneli</h2>

      <PieChart
        className={styles.chart}
        data={Object.entries(totalPartysVotes).map(party => ({
          title: party[0],
          value: party[1],
          color: getPartysColor(party[0])
        }))}
        label={({ data, dataIndex }) => {
          chartData || setChartData(data);
          return round(data[dataIndex].percentage) + '%';
        }}
        labelStyle={{
          fontSize: '5px',
          fontFamily: 'sans-serif',
          fill: '#121212'
        }}
        animate
      />

      <h3 className={styles.totalVote}>Toplam Oy: {formatNumber(totalVote)}</h3>
      {chartData
        ? chartData.map(({ title, color, percentage }) => (
            <Bar
              key={title}
              name={title}
              color={color}
              votePercent={round(percentage)}
              voteCount={formatNumber(totalPartysVotes[title])}
            />
          ))
        : ''}
    </div>
  );
};

export default GeneralResult;
