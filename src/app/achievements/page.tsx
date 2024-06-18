
import React from 'react'
import styles from './index.module.scss'
import AchievementCard from '../../../components/AchievementCard'
import { achievements } from '../../../cards'

const Achievements = () => {

  return (
    <section className={styles.achievements}>
        <div className={styles.achievements_container}>
            <div className={styles.achievements_container_cards}>
                {
                    Object.keys(achievements).map((key, index) => (
                        <AchievementCard key={index} achievements={achievements[key]} keyType={key}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Achievements