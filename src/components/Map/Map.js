import React from 'react';
import data from '../../data/secim.json';

import Province from '../Province/Province';

const Map = ({ isDiffShowing, appendActiveProvinces }) => (
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
);

export default Map;
