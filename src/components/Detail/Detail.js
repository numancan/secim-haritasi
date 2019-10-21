import React, { useContext, Fragment } from 'react';
import styles from './Detail.module.css';

import { ProvinceContext } from '../../ProvinceContext';
import Bar from '../Bar/Bar';
import {
  getPartysColor,
  calcPercent,
  sumOf,
  formatNumber
} from '../../helpers';

const Detail = () => {
  const { province, setProvince } = useContext(ProvinceContext);

  const closeDetail = () => {
    setProvince('');
  };

  const createBar = ({ name, id, voteCount }) => {
    const votePercent = calcPercent(voteCount, sumOf(province.results));
    const color = getPartysColor(name);

    return (
      <Bar
        key={id}
        name={name}
        color={color}
        voteCount={formatNumber(voteCount)}
        votePercent={votePercent}
      />
    );
  };

  return province ? (
    <Fragment>
      <div className={styles.overlay} onClick={closeDetail} />
      <div className={styles.container}>
        <h1 className={styles.title}>{province.name}</h1>

        {province.results.map(result => createBar(result))}

        <button className={styles.btnExit} onClick={closeDetail}>
          CLOSE
        </button>
      </div>
    </Fragment>
  ) : null;
};

export default Detail;
