import React, { useContext, useMemo } from 'react';
import { ProvinceContext } from '../ProvinceContext';
import { getPartysColor, sumOf, calcPercent } from '../helpers';
import provincesPath from '../data/provincesPath.json';
import styles from './Province.module.css';

const Province = ({ province, isDiffShowing, appendActiveProvinces }) => {
  const { setProvince } = useContext(ProvinceContext);
  const { name, results, id } = province;
  const pathToBeDrawn = provincesPath[id - 1];

  const sortResults = () => results.sort((a, b) => b.voteCount - a.voteCount);
  const sortedResult = useMemo(sortResults, []);

  const { 0: firstProvince, 1: secondProvince } = sortedResult;

  const difference = () =>
    isDiffShowing &&
    calcPercent(
      firstProvince.voteCount - secondProvince.voteCount,
      sumOf(sortedResult)
    );

  appendActiveProvinces(firstProvince.name);

  const handleClick = () => {
    setProvince(province);
  };

  return (
    <g
      className={styles.province}
      onClick={handleClick}
      id={name}
      style={{ fill: getPartysColor(firstProvince.name, difference()) }}
    >
      <path d={pathToBeDrawn} />
    </g>
  );
};

export default Province;
