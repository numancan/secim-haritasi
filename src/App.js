import React from 'react';
import Map from './components/Map';
import Detail from './components/Detail';
import { ProvinceProvider } from './ProvinceContext';
import GeneralResult from './components/GeneralResult';
import styles from './App.module.css';

const App = () => {
  return (
    <ProvinceProvider>
      <div className={styles.container}>
        <GeneralResult />
        <Map />
      </div>
      <Detail />
    </ProvinceProvider>
  );
};

export default App;
