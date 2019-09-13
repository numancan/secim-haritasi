import React, { useState } from 'react';
import { getPartysColor } from '../helpers.js';
import data from '../data/secim.json';
import styles from './Map.module.css';
import Province from './Province';

const Map = () => {
  const [isDiffShowing, setIsDiffShowing] = useState(false);
  const [activeProvinces, setActiveProvinces] = useState([]);

  const handleClick = () => {
    setIsDiffShowing(!isDiffShowing);
  };

  const appendActiveProvinces = provinceName => {
    if (!activeProvinces.includes(provinceName))
      setActiveProvinces([...activeProvinces, provinceName]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btnDifference} onClick={handleClick}>
        {isDiffShowing ? 'Genel Sonucu Goster' : 'Farki Goster'}
      </button>
      <div>
        {/* https://github.com/dnomak/svg-turkiye-haritasi */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1007.478 527.323"
          xmlSpace="preserve"
        >
          <g>
            {data.map(province => (
              <Province
                key={province.id}
                province={province}
                isDiffShowing={isDiffShowing}
                appendActiveProvinces={appendActiveProvinces}
              />
            ))}
          </g>
        </svg>

        {isDiffShowing ? (
          <div className={styles.holder}>
            <span>Fark Fazla</span> <div className={styles.gradientBar}></div>{' '}
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

export default Map;
