import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin } from '../../img/images'
import Link from 'next/link'

const Navigation = () => {
  return (
    <section className={styles.navigation}>
        <div className={styles.navigation_left}>
            <div className={styles.navigation_left_balance}>
                <Link href={'/'}>
                    <Image src={coin} alt='' width={36} height={36} className={styles.navigation_left_balance_icon}/>
                </Link>
                <p>42</p>
            </div>
        </div>

        <div className={styles.navigation_right}>
            <div className={styles.navigation_right_menu}>
                <ul>
                    <Link href={'/storage'}>
                        <li>Storage</li>
                    </Link>
                    <Link href={'/achievements'}>
                        <li>Achievements</li>
                    </Link>
                    <Link href={'/swap'}>
                        <li>Swap</li>
                    </Link>
                    <Link href={'/friends'}>
                        <li>Friends</li>
                    </Link>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navigation