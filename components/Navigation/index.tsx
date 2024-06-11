import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin } from '../../img/images'

const Navigation = () => {
  return (
    <section className={styles.navigation}>
        <div className={styles.navigation_left}>
            <div className={styles.navigation_left_balance}>
                <Image src={coin} alt='' width={36} height={36} className={styles.navigation_left_balance_icon}/>
                <p>42</p>
            </div>
        </div>

        <div className={styles.navigation_right}>
            <div className={styles.navigation_right_menu}>
                <ul>
                    <li>Storage</li>
                    <li>Achievements</li>
                    <li>Swap</li>
                    <li>Friends</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navigation