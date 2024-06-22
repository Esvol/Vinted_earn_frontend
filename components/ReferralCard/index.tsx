'use client'

import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { referral } from '../../img/images'
import { FaLink } from "react-icons/fa6";
import { User } from '@/redux/slices/auth';
import { useBecomeReferralMutation } from '@/redux/services/auth'
import toast from 'react-hot-toast'

const ReferralCard = () => {
    const [becomeReferral] = useBecomeReferralMutation()

    const [link, setLink] = useState('')

    const handleReferral = async (referralLink: string) => {
        try {
            if(link === '' || link.length === 64){
                await becomeReferral({link: referralLink})
                    .unwrap()
                    .then(() => {
                        toast.success(link !== '' ? "Your referral link was accepted! Welcome to the game!" : "Welcome to the game!", {style: {backgroundColor: 'rgba(40, 134, 90, 0.7)', color: 'rgba(255, 255, 255)'}})
                    })
                    .catch(error => {
                        toast.error(`${error.data.message}`, {style: {backgroundColor: 'rgba(208, 69, 85, 0.7)', color: 'rgba(255, 255, 255)'}})
                        throw new Error(error);
                    })
            }
            else{
                toast.error("The referral link must contain 64 characters!", {style: {backgroundColor: 'rgba(208, 69, 85, 0.7)', color: 'rgba(255, 255, 255)'}})
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.referralCard}>
        <Image src={referral} alt='referral' width={150} height={150}/>
        <p className={styles.referralCard_question}>Do you have an invitation link? If not, you can skip this window by clicking 'Skip'.</p>
        <div className={styles.referralCard_link}>
            <FaLink fontSize={16} className={styles.referralCard_link_icon}/>
            <input type="text" placeholder='Paste link here' value={link} onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div className={styles.referralCard_skip} onClick={() => handleReferral('')}>
            Skip
        </div>
        <div className={styles.referralCard_continue} onClick={() => handleReferral(link)}>
            Continue
        </div>
    </div>
  )
}

export default ReferralCard