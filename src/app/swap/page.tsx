'use client'

import React from 'react'
import styles from './index.module.scss'
import SwapCard from '../../../components/SwapCard';
import { clothes_discount, delivery_discount } from '../../../img/images';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/slices/auth';
import Image from 'next/image';
import { useUseDiscountMutation } from '@/redux/services/auth';
import toast from 'react-hot-toast';

type CardsKeys = 'clothes' | 'delivery'

const cards = {
    clothes: [
        {
            spend: 1000,
            receive: 1,
        },
        {
            spend: 2000,
            receive: 2.5,
        },
        {
            spend: 5000,
            receive: 7,
        },
    ],
    delivery: [
        {
            spend: 1000,
            receive: 4,
        },
        {
            spend: 2000,
            receive: 10,
        },
        {
            spend: 5000,
            receive: 27,
        },
    ],
}

const Swap = () => {
    const user = useSelector(selectUser)
    const [useDiscount] = useUseDiscountMutation();

    const handleUseDiscount = async (_id: string) => {
        try {
            if(user){
                await useDiscount({
                    id: _id
                }).unwrap()
                  .then(() => {
                    window.open('https://vinted.lt', '_blank');
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
    <section className={styles.swap}>
        <div className={styles.swap_container}>
            <div className={styles.swap_container_cards}>
                {
                    Object.keys(cards).map((card, index) => (
                        <SwapCard 
                            user={user}
                            cards={cards[`${card as CardsKeys}`]} 
                            type={card} 
                            image={card === 'clothes' ? clothes_discount : delivery_discount}
                        />
                    ))
                }
            </div>

            {
                user && user.discounts.length !== 0 && (
                    <div className={styles.swap_container_results}>
                        <h2>Your discounts</h2>
                        <div className={styles.swap_container_results_box}>
                            {
                                user.discounts.map((discount, index) => (
                                    <div key={index} className={styles.swap_container_results_box_discount}>
                                        <div>
                                            <Image src={discount.type === 'clothes' ? clothes_discount : delivery_discount} alt='' width={30} height={30}/>
                                            <p>{discount.type.charAt(0).toLocaleUpperCase() + discount.type.slice(1)} - {discount.amount}%</p>
                                        </div>
                                        <button onClick={() => handleUseDiscount(discount._id)}>
                                            Use discount
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Swap

