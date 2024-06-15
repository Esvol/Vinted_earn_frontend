import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { arrow, coin, sneakers1 } from '../../img/images'

import { GoLock } from "react-icons/go";
import { BiPurchaseTag } from "react-icons/bi";

type Props = {
  level: number,
  speed: number,
  image: string,
  title: string,
  headline?: string,
  text?: string,
  locked?: boolean,
  purchased?: boolean,
}

const StorageCard = ({level, speed, image, title, locked = false, purchased = false}: Props) => {
  return (
    <div className={styles.storageCard}>
        <div className={styles.storageCard_container}>
            <Image src={image} alt='' width={74} height={74} className={styles.storageCard_container_icon}/>
            <div className={styles.storageCard_container_level}>
              <p>{level} level</p>
              <span>{title}</span>
            </div>
        </div>

        <div className={`${locked ? `${styles.locked}` : ''} ${purchased ? `${styles.purchased}` : ''}`}>
          {
            locked && <GoLock className={styles.locked_icon}/>
          }
          {
            purchased && <BiPurchaseTag className={styles.purchased_icon}/>
          }
        </div>
    </div>
  )
}

export default StorageCard