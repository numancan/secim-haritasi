import React from 'react';
import Map from './components/Map';
import Detail from './components/Detail';
import { ProvinceProvider } from './ProvinceContext';
import GeneralResult from './components/GeneralResult';
import styles from './App.module.css';
import RandomResults from './components/RandomResults';

const App = () => {
  return (
    <ProvinceProvider className="helo">
      <RandomResults />
      <div className={styles.container}>
        <GeneralResult />
        <Map />
      </div>
      <Detail />
    </ProvinceProvider>
  );
};

export default App;
