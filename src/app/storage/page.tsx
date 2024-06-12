import React from 'react'
import styles from './index.module.scss'
import StorageCard from '../../../components/StorageCard'
import Image from 'next/image'
import { sneakers1, storageCap, storageShirt, storageSneakers, storageTrousers, timer, } from '../../../img/images'

import { FaArrowRightLong } from "react-icons/fa6";

const nav = [
  {
    img: storageCap,
    title: "Cap"
  },
  {
    img: storageShirt,
    title: "T-shirt"
  },
  {
    img: storageTrousers,
    title: "Trousers"
  },
  {
    img: storageSneakers,
    title: "Sneakers"
  },
  {
    img: timer,
    title: "Time"
  },
]

const Storage = () => {
  return (
    <section className={styles.storage}>
      <div className={styles.storage_container}>
        <div className={styles.storage_container_navigation}>
          {
            nav.map((el, index) => (
              <div key={index} className={styles.storage_container_navigation_link}>
                <Image src={el.img} alt={el.title} width={48} height={48}/>
                <p>{el.title}</p>
              </div>
            ))
          }
        </div>
        <div className={styles.storage_container_clothes}>

          <div className={styles.storage_container_clothes_icon}>
              <Image src={sneakers1} alt='sneakers' width={250} height={250} className={styles.storage_container_clothes_icon_img}/>
              <p>2 level</p>
          </div>
          
          <div className={styles.storage_container_clothes_info}>
            <h1>Green sneakers, slow edition </h1>
            <p className={styles.storage_container_clothes_info_text}>
              These entry-level running shoes have minimal features and quality, providing basic comfort and support. 
              Ideal for everyday wear, but not intended for intense sports or long-term use.
            </p>
            <div className={styles.storage_container_clothes_info_upgrade}>
              <p className={styles.storage_container_clothes_info_upgrade_price}>140</p>
              <button>Upgrade</button>
            </div>
          </div>

          <div className={styles.storage_container_clothes_details}>
            <div className={styles.storage_container_clothes_details_box}>
              <div className={styles.storage_container_clothes_details_box_was}>
                <p>0.25 coins</p> 
                <p>1 hours</p>
              </div>
              <FaArrowRightLong fontSize={60} color='black'/>
              <div className={styles.storage_container_clothes_details_box_will}>
                <p>0.29 coins</p> 
                <p>1 hours</p>
              </div>  
            </div>
          </div>
        </div>
        {/* <h1>Clothes</h1>
        <div className={styles.storage_container_clothes}>
          <div className={styles.storage_container_clothes_main}>
            <Image src={sneakers1} alt='' width={120} height={120}/>
            <p>Green</p>
          </div>
          <StorageCard />
          <StorageCard />
          <StorageCard />
          <StorageCard />
        </div> */}
      </div>
      
      <div className={styles.storage_container}>

      </div>
    </section>
  )
}

export default Storage