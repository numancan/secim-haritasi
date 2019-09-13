import React from 'react';
import styles from './Bar.module.css';

const Bar = ({ name, color, voteCount, votePercent }) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div
        className={styles.bar}
        style={{ background: color, width: `${votePercent}%` }}
      >
        <span className={styles.percent}>{votePercent + '%'}</span>
      </div>
      <p>Oy: {voteCount}</p>
    </div>
  );
};

export default Bar;
