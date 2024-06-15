'use client'

import React from 'react'
import styles from './index.module.scss'
import Image, { StaticImageData } from 'next/image'

import { GiUpgrade } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/slices/auth';

type Props = {
    img: string | StaticImageData,
    title: string,
    level: number,
    earning: number,
    first?: boolean,
    left?: boolean,
}

const Card = ({img, title, level, earning, first = false, left = false}: Props) => {

    const user = useSelector(selectUser)

  return (
    <div className={styles.card} style={{gridRow: left ? (first ? '1 / 9' : '12 / 20') : (first ? '2 / 10' : '13 / 21')}}>
        <div className={styles.card_icon}>
            <Image src={img} alt='cap' width={156} height={156}/>
        </div>
        <div className={styles.card_info}>
            <div className={styles.card_info_details}>
                <p>{title}</p>
            </div>
            <p className={styles.card_info_earn}>{earning} coins / 1 hour</p>
        </div>

        <div className={styles.card_level}>
            {level} lvl
        </div>
        <button className={styles.card_upgrade}>
            Upgrade
            <GiUpgrade fontSize={14} className={styles.card_upgrade_icon}/>
        </button>
    </div>
  )
}

export default Card