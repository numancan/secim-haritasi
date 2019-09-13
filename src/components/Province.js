import React, { useContext } from 'react';
import { ProvinceContext } from '../ProvinceContext';
import { getPartysColor, sumOf, calcPercent } from '../helpers';
import provincesPath from '../data/provincesPath.json';
import styles from './Province.module.css';

const Province = ({ province, isDiffShowing, appendActiveProvinces }) => {
  const { setProvince } = useContext(ProvinceContext);
  const { name, results, id } = province;
  const pathToBeDrawn = provincesPath[id - 1];
  let difference;

  results.sort((a, b) => b.voteCount - a.voteCount);
  const firstProvince = results[0];
  appendActiveProvinces(firstProvince.name);

  if (isDiffShowing) {
    const {
      0: { voteCount: firstProvinceCount },
      1: { voteCount: secondProvinceCount }
    } = results;

    difference = calcPercent(
      firstProvinceCount - secondProvinceCount,
      sumOf(results)
    );
  }

  const handleClick = () => {
    setProvince(province);
  };

  return (
    <g
      className={styles.province}
      onClick={handleClick}
      id={name}
      style={{ fill: getPartysColor(firstProvince.name, difference) }}
    >
      <path d={pathToBeDrawn} />
    </g>
  );
};

export default Province;
