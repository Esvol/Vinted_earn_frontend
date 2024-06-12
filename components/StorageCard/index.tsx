import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { sneakers1 } from '../../img/images'

const StorageCard = () => {
  return (
    <div className={styles.storageCard}>
        <div className={styles.storageCard_container}>
            <Image src={sneakers1} alt='' width={42} height={42}/>
            <p></p>
        </div>
    </div>
  )
}

export default StorageCard