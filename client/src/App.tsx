import React, { FC, useEffect } from 'react';
import axios from 'axios';

import styles from './App.module.scss';

export const App: FC = () => {
  useEffect(() => {
    axios.get('/api').then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div className={styles.app}>
      App! app
    </div>
  );
};
