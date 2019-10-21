import React from 'react';
import ResultSection from './components/ResultSection/ResultSection';
import Detail from './components/Detail/Detail';
import { ProvinceProvider } from './ProvinceContext';
import GeneralResultChart from './components/GeneralResult/GeneralResult';
import styles from './App.module.css';

const App = () => {
  return (
    <ProvinceProvider>
      <div className={styles.container}>
        <GeneralResultChart />
        <ResultSection />
      </div>
      <Detail />
    </ProvinceProvider>
  );
};

export default App;
