import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { arrow, coin, sneakers1 } from '../../img/images'


const StorageFullCard = () => {
  return (
    <div className={styles.clothes}>

        <div className={styles.clothes_icon}>
            <Image src={sneakers1} alt='sneakers' width={250} height={250} className={styles.clothes_icon_img}/>
            <p>1 level</p>
        </div>
        
        <div className={styles.clothes_info}>
        <h1>Green sneakers, slow edition </h1>
        <p className={styles.clothes_info_text}>
            These entry-level running shoes have minimal features and quality, providing basic comfort and support. 
            Ideal for everyday wear, but not intended for intense sports or long-term use.
        </p>
        <div className={styles.clothes_info_upgrade}>
            <p className={styles.clothes_info_upgrade_price}>
            <Image src={coin} alt='coin' width={20} height={20}/>
            <p>140</p>
            </p>
            <button>Upgrade</button>
        </div>
        </div>

        <div className={styles.clothes_details}>
        <div className={styles.clothes_details_box}>
            <div className={styles.clothes_details_box_was}>
            <div>0.25 coins</div> 
            </div>
            <Image src={arrow} width={80} height={80} alt='arrow' />
            <div className={styles.clothes_details_box_will}>
            <div>0.29 coins</div> 
            </div>  
        </div>
        </div>

    </div> 
  )
}

export default StorageFullCard