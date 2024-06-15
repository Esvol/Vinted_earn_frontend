'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { cap0, coin, mannequin, sneakers0, trousers0, tshirt0 } from '../../img/images'
import sparkGIF from '../../img/spark.gif'

import { LuPartyPopper } from "react-icons/lu";
import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import { selectUser } from '@/redux/slices/auth'
import { useSelector } from 'react-redux'
import { useIsStartedMutation } from '@/redux/services/auth'

const Mannequin = () => {
  const user = useSelector(selectUser)

  const [isStarted] = useIsStartedMutation();

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10); // 10
  const [progress, setProgress] = useState(0);
  const [isEarning, setIsEarning] = useState(true);

  useEffect(() => {
    if(isEarning){
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
    }
  }, [isEarning]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);

  const handleClaim = () => {
    setCount(0)
    setTimer(10)
    setProgress(0)
    setIsEarning(true)
  }

  const handleIsStart = async () => {
    try {
      if(user){
        await isStarted().unwrap()
          .then(() => {
              // toast.success(dict.data_saved);
              setTimer(10)
              setIsEarning(true)
          })
          .catch(error => {
              // toast.error(dict.data_notSaved);
              console.log(error);
              throw new Error(error);
          })
      }
    } catch (error) {
      alert('Problem with starting the game!')
    }
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

        <button className={styles.mannequin_earn_claim} onClick={!isEarning ? handleClaim : () => {}}>
          {
            user && user.isStarted === true ? (
              <div className={styles.mannequin_earn_claim_container}>
                {
                  !isEarning ? (
                    <>
                      <FaCheckCircle width={16} height={16} style={{ zIndex: 3}}/>
                      <span>Claim</span>
                    </>
                  )
                  : (
                    <>
                      <LuCircleDashed fontSize={16} className={styles.mannequin_earn_claim_container_wait}/>
                      <span>Farming</span>
                    </>
                  )
                }
              </div>
            )
            : (
              <div className={styles.mannequin_earn_claim_start} onClick={handleIsStart}>
                <LuPartyPopper fontSize={14} color='#ffff00e0'/>
                Start
                <LuPartyPopper fontSize={14} color='#ffff00e0'/>
              </div>
            )
          }
            {/* {
              isEarning && user.isStarted === true ? (
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

            {
              user.isStarted === false &&
              (
                <div className={styles.mannequin_earn_claim_start}>
                  Start
                </div>
              )
            } */}
            <div className={styles.mannequin_earn_claim_progress} style={{ width: `${progress}%` }}></div>
        </button>

        <div className={styles.mannequin_earn_line}></div>

        <div className={styles.mannequin_earn_timer}>
          <MdOutlineTimer fontSize={14} className={styles.mannequin_earn_timer_icon}/>
          <p>{hours} h {minutes} min</p>
        </div>

      </div>

      <div className={styles.mannequin_effects}>
          {
            isEarning && <Image src={sparkGIF} alt="GIF"  className={styles.mannequin_effects_spark}/>
          }
          <Image src={cap0} alt='' className={`${styles.mannequin_effects_cap} ${isEarning ? '' : `${styles.move_left}`}`} />
          <Image src={tshirt0} alt=''  className={`${styles.mannequin_effects_tshirt} ${isEarning ? '' : `${styles.move_right}`}`} />
          <Image src={trousers0} alt='' className={`${styles.mannequin_effects_trousers} ${isEarning ? '' : `${styles.move_left}`}`} />
          <Image src={sneakers0} alt='' className={`${styles.mannequin_effects_sneakers} ${isEarning ? '' : `${styles.move_right}`}`} />
      </div>
    </div>
  )
}

export default Mannequin