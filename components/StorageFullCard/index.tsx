'use client'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { arrow, coin, sneakers1 } from '../../img/images'
import { useUpdateItemMutation } from '@/redux/services/auth'

type Props = {
    // Card type, BUT IT DOES SEE IT!!!! 
    card: {
        level: number,
        speed: number,
        price: number,
        title: string,
        headline: string,
        text: string,
        image: string,
    },
    type: string,
    prevSpeed: number,
    lastItem: boolean
}

const StorageFullCard = ({type, card, prevSpeed, lastItem}: Props) => {
    const [updateItem] = useUpdateItemMutation();

    const handleUpgrade = async () => {
        try {
            await updateItem({type, level: card.level, speed: card.speed, image: card.image, price: card.price})
                .unwrap()
                .then((user) => {
                    console.log(user);
                })
                .catch(error => {
                    console.log(error);
                    throw new Error(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.clothes}>

        <div className={styles.clothes_icon}>
            <Image src={card.image} alt='sneakers' width={250} height={250} className={styles.clothes_icon_img}/>
            <p>{card.level} level</p>
        </div>
        
        <div className={styles.clothes_info}>
        <h1>{card.headline} </h1>
        <p className={styles.clothes_info_text}>
            {card.text}
        </p>
        {
            !lastItem && (
                <div className={styles.clothes_info_upgrade}>
                    <p className={styles.clothes_info_upgrade_price}>
                    <Image src={coin} alt='coin' width={20} height={20}/>
                    <p>{card.price}</p>
                    </p>
                    <button onClick={handleUpgrade}>Upgrade</button>
                </div>
            )
        }
        </div>

        <div className={styles.clothes_details}>
        <div className={styles.clothes_details_box}>
            {
                !lastItem && (
                    <>
                        <div className={styles.clothes_details_box_was}>
                            <div>
                                {type === 'time' ? `${prevSpeed} hours` : `${prevSpeed} coins`}
                            </div> 
                        </div>
                        <Image src={arrow} width={80} height={80} alt='arrow' />
                    </>
                )
            }
            <div className={styles.clothes_details_box_will}>
            <div>
                {type === 'time' ? `${card.speed} hours` : `${card.speed} coins`}
            </div> 
            </div>  
        </div>
        </div>

    </div> 
  )
}

export default StorageFullCard