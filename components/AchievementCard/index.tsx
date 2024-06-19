'use client'

import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/slices/auth'
import { Achievement, achievements } from '../../cards';
import { coin } from '../../img/images'
import { useClaimAchievementMutation } from '@/redux/services/auth'

type Props = {
    achievements: Achievement[],
    keyType: string,
}

const AchievementCard = ({achievements, keyType}: Props) => {
    const user = useSelector(selectUser)
    const [claimAchievement] = useClaimAchievementMutation();

    const userAchievement = user && user.achievements.filter(ach => {
        if(ach.type === keyType)
            return ach;
    })[0]

    const isLastAchievement = userAchievement && userAchievement?.level > achievements.length

    const currentAchievement = userAchievement && !isLastAchievement ? achievements.filter((ach, index) => {
        if(user && userAchievement?.level === ach.level){
            return ach
        }
    })[0] : achievements[achievements.length - 1]

    const progress = user ? ((user.totalData[`${currentAchievement.type}`] / currentAchievement.goal * 100)) : 0

    const handleClaim = async () => {
        try {
            if(user){
                await claimAchievement({
                    type: keyType, 
                    level: userAchievement ? userAchievement?.level + 1 : 1, 
                    reward: currentAchievement.reward, 
                    rewardType: currentAchievement.rewardType
                }).unwrap()
                  .then(() => {
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
    <div className={styles.achievementCard}>
        <div className={styles.achievementCard_navigation}>
            {
                achievements.map((achiement, index) => (
                    <div key={index} className={`${(userAchievement && userAchievement.level > (index + 1)) ? `${styles.claimed}` : '' } ${(userAchievement && userAchievement.level === (index + 1)) ? `${styles.current}` : '' }`}>
                        {achiement.level}
                    </div>
                ))
            }
        </div>

        {   
            currentAchievement && 
            <div className={styles.achievementCard_card}>
                <div className={styles.achievementCard_card_progress}> 
                    {
                        isLastAchievement ? (
                            <span>You took all the achievements from this category!</span>
                        )
                        : (
                            <>
                                <p>{progress > 100 ? 100 : progress.toFixed(1)}%</p>
                                <div className={styles.achievementCard_card_progress_bar}>
                                    <div className={styles.achievementCard_card_progress_bar_effect} style={{width: `${progress > 100 ? 100 : progress}%`}}></div>
                                </div>
                            </>
                        )
                    }
                </div>
                    
                <div className={styles.achievementCard_card_content}>
                    <Image src={currentAchievement.image} alt='' width={200} height={250} className={styles.achievementCard_card_content_image}/>
                    <div className={styles.achievementCard_card_content_box}>
                        <h4>{currentAchievement.title}</h4>
                        <p>
                            {currentAchievement.text}
                        </p>
                        {
                            isLastAchievement ? (
                                <button disabled={true}>
                                    Congrats!
                                </button>
                            ) : (
                                <button disabled={progress >= 100 ? false : true} onClick={handleClaim}>
                                    Claim
                                </button>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        }

        {
            !isLastAchievement && (
                <div className={styles.achievementCard_reward}>
                    <div className={styles.achievementCard_reward_box}>
                        <p>{currentAchievement.rewardText}</p>
                        <Image src={coin} alt='coin' width={0} height={0} className={styles.achievementCard_reward_box_icon}/>
                    </div>
                    <div className={styles.achievementCard_reward_line}></div>
                </div>
            )
        }
    </div>
  )
}

export default AchievementCard