'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { cap1, coin, mannequin, sneakers1, trousers1, tshirt1 } from '../../img/images'
import sparkGIF from '../../img/spark.gif'

import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Mannequin = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10); 
  const [progress, setProgress] = useState(0);
  const [isEarning, setIsEarning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => Number((prevCount + 0.42).toFixed(2)));
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(intervalId);
          setIsEarning(false);
          return 0;
        }

        const newTimer = prevTimer - 1;
        setProgress((10 - newTimer) / 10 * 100);
        return newTimer;
      });
    }, 1000);


    return () => clearInterval(intervalId);

  }, [isEarning]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);

  const handleClaim = () => {
    setCount(0)
    setTimer(10)
    setProgress(0)
    setIsEarning(true)
  }

  return (
    <div className={styles.mannequin}>
      <div className={styles.mannequin_title}>
        <h1>Your mannequin</h1>
      </div>

      <div className={styles.mannequin_icon}> 
          <Image src={mannequin} alt='mannequin' className={styles.mannequin_icon_img}/>
      </div>

      <div className={styles.mannequin_earn}>
        <div className={styles.mannequin_earn_amount}>
          <Image src={coin} alt='coin' width={16} height={16} style={{marginBottom: '1px', zIndex: 3}}/>
          <p> {count} </p>  
        </div>

        <div className={styles.mannequin_earn_line}></div>

        <button className={styles.mannequin_earn_claim} onClick={timer === 0 ? handleClaim : () => {}}>
            {
              timer === 0 ? (
                <div className={styles.mannequin_earn_claim_container}>
                  <FaCheckCircle width={16} height={16} style={{ zIndex: 3}}/>
                  <span>Claim</span>
                </div>
              ) : (
                <div className={styles.mannequin_earn_claim_container}>
                  <LuCircleDashed fontSize={16} className={styles.mannequin_earn_claim_container_wait}/>
                  <span>Farming</span>
                </div>
              )
            }
            <div className={styles.mannequin_earn_claim_progress} style={{ width: `${progress}%` }}></div>
        </button>

        <div className={styles.mannequin_earn_line}></div>

        <div className={styles.mannequin_earn_timer}>
          <MdOutlineTimer fontSize={14} className={styles.mannequin_earn_timer_icon}/>
          <p>{hours} h {minutes} min</p>
        </div>

      </div>

      <div className={styles.mannequin_effects}>
        <div>

        </div>
          {
            isEarning && <Image src={sparkGIF} alt="GIF"  className={styles.mannequin_effects_spark}/>
          }
          <Image src={cap1} alt='' className={`${styles.mannequin_effects_cap} ${isEarning ? '' : `${styles.move_left}`}`} />
          <Image src={tshirt1} alt=''  className={`${styles.mannequin_effects_tshirt} ${isEarning ? '' : `${styles.move_right}`}`} />
          <Image src={trousers1} alt='' className={`${styles.mannequin_effects_trousers} ${isEarning ? '' : `${styles.move_left}`}`} />
          <Image src={sneakers1} alt='' className={`${styles.mannequin_effects_sneakers} ${isEarning ? '' : `${styles.move_right}`}`} />
      </div>
    </div>
  )
}

export default Mannequin