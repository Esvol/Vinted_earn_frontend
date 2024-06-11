import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

type Props = {
    img: string,
    title: string,
    level: number,
    earning: number,
    first?: boolean,
    left?: boolean,
}

const Card = ({img, title, level, earning, first = false, left = false}: Props) => {
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
    </div>
  )
}

export default Card