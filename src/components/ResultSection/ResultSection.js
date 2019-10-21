import React, { useState } from 'react';
import styles from './ResultSection.module.css';

import { getPartysColor } from '../../helpers.js';

import Map from '../Map/Map';

const ResultSection = () => {
  const [isDiffShowing, setIsDiffShowing] = useState(false);
  const [activeProvinces, setActiveProvinces] = useState([]);

  const appendActiveProvinces = provinceName => {
    if (!activeProvinces.includes(provinceName))
      setActiveProvinces([...activeProvinces, provinceName]);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.btnDifference}
        onClick={() => setIsDiffShowing(!isDiffShowing)}
      >
        {isDiffShowing ? 'Genel Sonucu Goster' : 'Farki Goster'}
      </button>

      <div>
        <Map
          appendActiveProvinces={appendActiveProvinces}
          isDiffShowing={isDiffShowing}
        />

        {isDiffShowing ? (
          <div className={styles.holder}>
            <span>Fark Fazla</span>
            <div className={styles.gradientBar}></div>
            <span>Fark Az</span>
          </div>
        ) : (
          <ul className={styles.list}>
            {activeProvinces.map(provinceName => (
              <li className={styles.item} key={provinceName}>
                <div
                  className={styles.box}
                  style={{
                    background: getPartysColor(provinceName)
                  }}
                />
                <p className={styles.name}>{provinceName}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResultSection;
