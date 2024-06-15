import React from 'react'
import styles from './index.module.scss'

import Image from 'next/image'
import { sneakers1, storageCap, storageLine, storageShirt, storageSneakers, storageTrousers, timer, } from '../../../img/images'

import StorageSmallCard from '../../../components/StorageSmallCard'
import StorageFullCard from '../../../components/StorageFullCard'
import { cards } from '../../../cards'

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
    headline: 'Green sneakers, slow edition',
    text: 'These entry-level running shoes have minimal features and quality, providing basic comfort and support. Ideal for everyday wear, but not intended for intense sports or long-term use.',
    image: sneakers1,
    purchased: false,
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
    locked: true,
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

        <StorageFullCard />

        <div className={styles.storage_container_upgrade}>
          {
            cards.sneakers.map((card, index) => (
              <>
                <StorageSmallCard key={index} speed={card.speed} level={card.level} image={card.image} title={card.title} purchased={card.purchased} locked={card.locked}/>
                {
                  index !== (cards.sneakers.length - 1) 
                    && <Image src={storageLine} alt='line' width={20} height={20} style={{transform: `${index % 2 == 1 ? 'scaleY(-1)' : ''}`}}/>
                }
              </>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default Storage



// Arrows to go through the items.
{/* 
  <div className={styles.storage_container_clothes_arrows}>
    <div className={styles.storage_container_clothes_arrows_left}>
      <TbArrowRightToArc fontSize={24} color='#fff'/>
    </div>  
    <div className={styles.storage_container_clothes_arrows_right}>
      <TbArrowRightToArc fontSize={24} color='#fff'/>
    </div>  
  </div> 
*/}