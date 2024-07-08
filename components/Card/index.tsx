'use client'

import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

import { GiUpgrade } from "react-icons/gi";
import { InventoryItem, setStorageNavigation } from '@/redux/slices/auth';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../src/redux/hooks';

type Props = {
    card: InventoryItem & {time: number | undefined},
    title: string,
    first?: boolean,
    left?: boolean,
}

const Card = ({card, title, first = false, left = false}: Props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleUpdateNavigation = () => {
        dispatch(setStorageNavigation(card.type))
        router.push('/storage')
    }

  return (
    <div className={styles.card} style={{gridRow: left ? (first ? '1 / 9' : '12 / 20') : (first ? '2 / 10' : '13 / 21')}}>
        <div className={styles.card_icon}>
            <Image src={card.image} alt={card.title} unoptimized width={156} height={156}/>
        </div>
        <div className={styles.card_info}>
            <div className={styles.card_info_details}>
                <p>{card.title.split(' ')[1] + " " + title}</p>
            </div>
            <p className={styles.card_info_earn}>{card.speed} coins / 1 hour</p>
        </div>

        <div className={styles.card_level}>
            {card.level} lvl
        </div>
        {
            card.level !== 5 ? (
                <button className={styles.card_upgrade} onClick={handleUpdateNavigation}>
                    Upgrade
                    <GiUpgrade fontSize={14} className={styles.card_upgrade_icon}/>
                </button>
            ) : (
                <button className={styles.card_upgrade}>
                    Maximum
                    <IoIosCheckmarkCircleOutline fontSize={14}/>
                </button>
            )
        }
    </div>
  )
}

export default Card