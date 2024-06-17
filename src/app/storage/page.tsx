'use client'

import React, { useState } from 'react'
import styles from './index.module.scss'

import Image from 'next/image'
import { storageCap, storageLine, storageShirt, storageSneakers, storageTimer, storageTrousers, } from '../../../img/images'

import StorageSmallCard from '../../../components/StorageSmallCard'
import StorageFullCard from '../../../components/StorageFullCard'
import { cards } from '../../../cards'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/slices/auth'

const nav = [
  {
    img: storageCap,
    title: "Cap",
    type: "cap",
  },
  {
    img: storageShirt,
    title: "T-shirt",
    type: "tshirt",
  },
  {
    img: storageTrousers,
    title: "Trousers",
    type: "trousers",
  },
  {
    img: storageSneakers,
    title: "Sneakers",
    type: "sneakers",
  },
  {
    img: storageTimer,
    title: "Time",
    type: "time",
  },
]

type NavigationProps = 'cap' | 'tshirt' | 'trousers' | 'sneakers' | 'time'

const Storage = () => {
  const user = useSelector(selectUser)
  
  const [navigation, setNavigation] = useState<NavigationProps>('cap');

  const userCard = user?.inventory.filter(item => item.type === navigation)[0]
  const card = userCard && userCard.level !== 5 ? cards[`${navigation}`][userCard.level] : cards[`${navigation}`][cards[`${navigation}`].length - 1] 
  const prevSpeed = userCard ? userCard.speed : cards[`${navigation}`][0].speed

  const handleNavigation = (type: NavigationProps) => {
    setNavigation(type);
  }

  return (
    <section className={styles.storage}>

      <div className={styles.storage_container}>
        <div className={styles.storage_container_navigation}>
          {
            nav.map((el, index) => (
              <div key={index} className={styles.storage_container_navigation_link} onClick={() => handleNavigation(el.type as NavigationProps)}>
                <Image src={el.img} alt={el.title} width={48} height={48}/>
                <p>{el.title}</p>
              </div>
            ))
          }
        </div>

        <StorageFullCard card={card} type={navigation} prevSpeed={prevSpeed} lastItem={userCard?.level === 5}/>

        <div className={styles.storage_container_upgrade}>
          {
            cards[`${navigation}`].map((card, index) => (
              <>
                <StorageSmallCard key={index} speed={card.speed} level={card.level} image={card.image} title={card.title} purchased={userCard && (userCard.level + 1) > card.level} locked={userCard && (userCard.level + 1) < card.level}/>
                {
                  index !== (cards[`${navigation}`].length - 1) 
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