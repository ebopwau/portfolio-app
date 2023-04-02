import React, { FC, useEffect } from 'react';
import axios from 'axios';

export const View: FC = () => {
  useEffect(() => {
    axios.get('/api/connected').then(({ data }) => {
      console.log('data', data);
    });
  }, []);

  return (
    <div>
      App!
    </div>
  );
};
