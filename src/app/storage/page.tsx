import React from 'react'
import styles from './index.module.scss'
import StorageCard from '../../../components/StorageCard'
import Image from 'next/image'
import { arrow, coin, sneakers1, storageCap, storageLine, storageShirt, storageSneakers, storageTrousers, timer, } from '../../../img/images'

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

const storageCard = [
  {
    level: 1,
    speed: 0.24,
    title: 'Basic Green',
    headline: '',
    text: '',
    image: sneakers1,
    purchased: true,
    locked: false,
  },
  {
    level: 2,
    speed: 0.28,
    title: 'Royal Sapphire',
    headline: '',
    text: '',
    image: sneakers1,
    purchased: false,
    locked: false,
  },
  {
    level: 3,
    speed: 0.33,
    title: 'Gleaming Emerald',
    headline: '',
    text: '',
    image: sneakers1,
    purchased: false,
    locked: true,
  },
  {
    level: 4,
    speed: 0.38,
    title: 'Radiant Ruby',
    headline: '',
    text: '',
    image: sneakers1,
    purchased: false,
    locked: true,
  },
  {
    level: 5,
    speed: 0.45,
    title: 'Epic Galaxy',
    headline: '',
    text: '',
    image: sneakers1,
    purchased: false,
    locked: true,
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
              <p className={styles.storage_container_clothes_info_upgrade_price}>
                <Image src={coin} alt='coin' width={20} height={20}/>
                140
              </p>
              <button>Upgrade</button>
            </div>
          </div>

          <div className={styles.storage_container_clothes_details}>
            <div className={styles.storage_container_clothes_details_box}>
              <div className={styles.storage_container_clothes_details_box_was}>
                <div>0.25 coins</div> 
              </div>
              <Image src={arrow} width={80} height={80} alt='arrow' />
              {/* <FaArrowRightLong fontSize={60} color='black'/> */}
              <div className={styles.storage_container_clothes_details_box_will}>
                <div>0.29 coins</div> 
              </div>  
            </div>
          </div>
        </div>

        <div className={styles.storage_container_upgrade}>
          {
            storageCard.map((card, index) => (
              <>
                <StorageCard speed={card.speed} level={card.level} image={card.image} title={card.title} purchased={card.purchased} locked={card.locked}/>
                {
                  index !== (storageCard.length - 1) 
                    && <Image src={storageLine} alt='line' width={20} height={20} style={{transform: `${index % 2 == 1 ? 'scaleY(-1)' : ''}`}}/>
                }
              </>
            ))
          }
        </div>
      </div>
      
      <div className={styles.storage_container}>

      </div>
    </section>
  )
}

export default Storage