'use client'

import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin } from '../../img/images'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/slices/auth'

const nav = [
    {
        title: 'Storage',
        type: 'storage'
    },
    {
        title: 'Achievements',
        type: 'achievements'
    },
    {
        title: 'Swap',
        type: 'swap'
    },
    {
        title: 'Friends',
        type: 'friends'
    },
]

const Navigation = () => {
    const user = useSelector(selectUser);
    const path = window.location.pathname.replace('/', '')
    const [navigation, setNavigation] = useState(path ? path : '')
    
  return (
    <section className={styles.navigation}>
        <div className={styles.navigation_left}>
            <div className={styles.navigation_left_balance}>
                <Link href={'/'} onClick={() => setNavigation('')}>
                    <Image src={coin} alt='' width={36} height={36} className={styles.navigation_left_balance_icon}/>
                </Link>
                <p>{user && user.balance}</p>
            </div>
        </div>

        <div className={styles.navigation_right}>
            <div className={styles.navigation_right_menu}>
                <ul>
                    {
                        nav.map((el, index) => (
                            <Link key={index} href={`/${el.type}`} onClick={() => setNavigation(el.type)} className={`${navigation === el.type ? `${styles.activeLink}`: ''}`}>
                                <li>{el.title}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navigation