const map = (x, inMin, inMax, outMin, outMax) => {
  return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const getPartysColor = (id, difference) => {
  const colors = {
    'Saadet Partisi': '#f05053',
    BTP: '#b8f050',
    TKP: '#d35400',
    'Vatan Partisi': '#3498db',
    BBP: '#e74c3c',
    '6': '#fff',
    CHP: '#ff3f34',
    'AK Parti': '#ff9400',
    DP: '#2980b9',
    MHP: '#575fcf',
    'İyi Parti': '#f78fb3',
    HDP: '#B33771',
    DSP: '#3dc1d3'
  };

  if (difference) return `hsl(207, 37%, ${map(difference, 0, 100, 85, 20)}%)`;
  else return colors[id] || '#d1d8e0';
};

export const round = num => Math.round(num * 100) / 100;

export const calcPercent = (count, totalCount) => {
  return round((count / totalCount) * 100);
};

export const sumOf = results => {
  return results
    .map(result => result.voteCount)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

export const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
