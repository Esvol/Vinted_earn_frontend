import React from 'react'
import styles from './index.module.scss'

import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Puff
        visible={true}
        height="100"
        width="100"
        color="rgb(0, 119, 130)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        />
    </div>
  );
};

export default Loader