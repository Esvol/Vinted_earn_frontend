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
  full?: boolean,
}

const StorageCard = ({level, speed, image, title, locked = false, purchased = false, full = false}: Props) => {
  return (
    <div className={styles.storageCard}>
        <div className={`${full ? `${styles.none}` : `${styles.storageCard_container}`}`}>
            <Image src={image} alt='' width={74} height={74} className={styles.storageCard_container_icon}/>
            <div className={styles.storageCard_container_level}>
              <p>{level} level</p>
              <span>{title}</span>
            </div>
        </div>

        <div className={`${full ? `${styles.storageCard_containerFull}` : `${styles.none}`}`}>
          
          <div className={styles.storageCard_containerFull_icon}>
              <Image src={sneakers1} alt='sneakers' width={250} height={250} className={styles.storageCard_containerFull_icon_img}/>
              <p>1 level</p>
          </div>
          
          <div className={styles.storageCard_containerFull_info}>
            <h1>Green sneakers, slow edition </h1>
            <p className={styles.storageCard_containerFull_info_text}>
              These entry-level running shoes have minimal features and quality, providing basic comfort and support. 
              Ideal for everyday wear, but not intended for intense sports or long-term use.
            </p>
            <div className={styles.storageCard_containerFull_info_upgrade}>
              <p className={styles.storageCard_containerFull_info_upgrade_price}>
                <Image src={coin} alt='coin' width={20} height={20}/>
                <p>140</p>
              </p>
              <button>Upgrade</button>
            </div>
          </div>

          <div className={styles.storageCard_containerFull_details}>
            <div className={styles.storageCard_containerFull_details_box}>
              <div className={styles.storageCard_containerFull_details_box_was}>
                <div>0.25 coins</div> 
              </div>
              <Image src={arrow} width={80} height={80} alt='arrow' />
              <div className={styles.storageCard_containerFull_details_box_will}>
                <div>0.29 coins</div> 
              </div>  
            </div>
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