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
                <StorageSmallCard key={index} speed={card.speed} level={card.level} image={card.image} title={card.title} purchased={false} locked={index !== 0 ? true : false}/>
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