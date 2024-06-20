'use client'

import React, { useState } from 'react'
import styles from './index.module.scss'
import Image, { StaticImageData } from 'next/image'

import { IoIosSwap } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { User } from '@/redux/slices/auth'
import { useSwapForDiscountMutation } from '@/redux/services/auth';
import toast from 'react-hot-toast';

type Props = {
    user: User | null
    cards: {
        spend: number,
        receive: number
    }[],
    type: string,
    image: string | StaticImageData,

}

const SwapCard = ({user, cards, type, image}: Props) => {
    const [swap] = useSwapForDiscountMutation();

    const [navigation, setNavigation] = useState(1)

    const currentCard = cards[navigation-1]

    const handleSwap = async () => {
        try {
            if(user){
                await swap({
                    type, 
                    price: currentCard.spend, 
                    amount: currentCard.receive, 
                }).unwrap()
                  .then(() => {
                    toast.success(`You received ${currentCard.receive}% for any ${type}!`)
                  })
                  .catch(error => {
                      console.log(error);
                      throw new Error(error);
                  })
              }
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className={styles.card}>
        {
            navigation > 1 ? (
                <div className={styles.card_arrow} onClick={() => setNavigation(prev => prev - 1)}>
                    <FaLongArrowAltLeft fontSize={20}/>
                </div>
            ) : (
                <div className={styles.hidden}></div>
            )
        }
       

        <div className={styles.card_container}>
            <div className={styles.card_container_front}>
                <p className={styles.card_container_front_headline}>VINTED</p>
                <div className={styles.card_container_front_icon}>
                    <Image src={image} alt='coin' width={35} height={35}/>
                </div>
                <div className={styles.card_container_front_amount}>
                    <span>{currentCard.spend} coins</span>
                    <IoIosSwap fontSize={18}/>
                    <span>{currentCard.receive}% discount</span>
                </div>
                <p className={styles.card_container_front_type}>{type.toLocaleUpperCase()} DISCOUNT</p>
            </div>

            <div className={styles.card_container_back}>
                <div className={styles.card_container_back_box}>
                    <button
                        onClick={handleSwap} 
                        type="button" 
                        disabled={user ? user.balance <= currentCard.spend : false} 
                        className={`${user && user.balance >= currentCard.spend ? `${styles.possible}` : `${styles.impossible}`}`}>
                            Swap
                    </button>
                    <p className={styles.card_container_back_box_count}>{navigation}</p>
                </div>
            </div>
        </div>

        {
            navigation < 3 ? (
                <div className={styles.card_arrow} onClick={() => setNavigation(prev => prev + 1)}>
                    <FaLongArrowAltRight fontSize={20}/>
                </div>
            ) : (
                <div className={styles.hidden}></div>
            )
        }
    </div>
  )
}

export default SwapCard