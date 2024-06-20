'use client'

import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin, family, invitation } from '../../../img/images'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/slices/auth'
import { FaRegCopy } from "react-icons/fa6";
import toast from 'react-hot-toast'

const Friends = () => {
    const user = useSelector(selectUser);

    const handleCopy = () => {
        navigator.clipboard.writeText(user ? user?.referralLink : '')
            .then(() => {
                toast.success(`Your referral link was copied!`, {style: {backgroundColor: 'rgba(40, 134, 90, 0.7)', color: 'rgba(255, 255, 255)'}})
            })
            .catch((err) => {
                toast.error('Problem with coping the link!', {style: {backgroundColor: 'rgba(208, 69, 85, 0.7)', color: 'rgba(255, 255, 255)'}})
            });
    }

  return (
    <section className={styles.friends}>
        <div className={styles.friends_container}>
            <div className={styles.friends_container_box}>
                <Image src={invitation} alt='invitation' width={500} height={500}/>
                <div className={styles.friends_container_box_link}>
                    <h3>Your referral link:</h3>
                    <div className={styles.friends_container_box_link_action}>
                        <p>{user?.referralLink.slice(0, 24)}...</p>
                        <div onClick={handleCopy}>
                            <FaRegCopy fontSize={20}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.friends_container_friends}>
                <Image src={family} alt='family' width={30} height={30}/>
                <h2>Invite frens</h2>
                <div className={styles.friends_container_friends_claim}>
                    <div>
                        <Image src={coin} alt='coin' width={20} height={20} />
                        <p>130</p>
                    </div>
                    <button>Claim</button>
                </div>
                <span className={styles.friends_container_friends_info}>
                    Every time your friend claim Vinted Coins you get <b>2.5%</b> cashback.
                </span>
                <p className={styles.friends_container_friends_amount}>1 frens</p>
                <div className={styles.friends_container_friends_box}>
                    <div className={styles.friends_container_friends_box_friend}>
                        <Image src={user ? user?.image : ''} alt='friend' width={40} height={40} className={styles.friends_container_friends_box_friend_avatar}/>
                        <div>
                            <p>{user?.displayName}</p>
                            <span>25400 VC</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Friends