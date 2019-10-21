import React, { useState, createContext } from 'react';

export const ProvinceContext = createContext();

export const ProvinceProvider = props => {
  const [province, setProvince] = useState();

  return (
    <ProvinceContext.Provider value={{ province, setProvince }}>
      {props.children}
    </ProvinceContext.Provider>
  );
};
