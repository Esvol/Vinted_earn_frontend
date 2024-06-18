'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin, mannequin } from '../../img/images'
import sparkGIF from '../../img/spark.gif'
import crypto from 'crypto'

import { LuPartyPopper } from "react-icons/lu";
import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import { selectUser } from '@/redux/slices/auth'
import { useSelector } from 'react-redux'
import { useClaimCoinsMutation, useIsStartedMutation } from '@/redux/services/auth'

const Mannequin = () => {
  const user = useSelector(selectUser)
  const [claimCoins] = useClaimCoinsMutation();
  const [isStarted] = useIsStartedMutation();

  const time = user ? user?.inventory[4].speed * 3600 : undefined;
  const speed = user?.inventory.reduce((acc, item) => {
    if (item.type === 'time'){
      return acc
    }
    return acc + item.speed
  }, 0)

  const [coins, setCoins] = useState(0);
  const [timer, setTimer] = useState(0);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if(user){
      const savedEndTime = localStorage.getItem(`endTime_${crypto.createHash('sha256').update(user._id).digest('hex')}`);

      if (savedEndTime !== null) {
        setEndTime(parseInt(savedEndTime, 10));
      } 
      else if (user?.isStarted && time){
        const newEndTime = Date.now() + time * 1000;
        setEndTime(newEndTime);
        localStorage.setItem(`endTime_${crypto.createHash('sha256').update(user._id).digest('hex')}`, `${newEndTime}`);
      }
    }
  }, []); 

  useEffect(() => {
    if (endTime !== null && time !== undefined && speed !== undefined) {
      const updateTimer = () => {
        const remainingTime = Math.max((endTime - Date.now()) / 1000, 0);
        const earnedCoins = ((time - Math.ceil(remainingTime)) * speed / 3600).toFixed(3)
        if(remainingTime === 0){
          clearInterval(intervalId)
        }
        else{
          setProgress((Math.ceil(time - remainingTime) / time) * 100)
        }
        if(user?.isStarted){
          setCoins(parseFloat(earnedCoins));
        }
        setTimer(Math.ceil(remainingTime));
      };
      const intervalId = setInterval(updateTimer, 1000);
      updateTimer(); 
      return () => clearInterval(intervalId);
    }

  }, [endTime, user?.isStarted]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);

  const handleClaim = async () => {
    if(user){
      try {
        await claimCoins({
            coins, 
            time: time ? time / 3600 : 0
          }).unwrap()
          .then(() => {
          })
          .catch(error => {
              console.log(error);
              throw new Error(error);
          })
      } catch (error) {
        console.log(error);
      }
      
      if(time !== undefined){
        const newEndTime = Date.now() + time * 1000; 
        setTimer(time);
        setEndTime(newEndTime); 
        localStorage.setItem(`endTime_${crypto.createHash('sha256').update(user._id).digest('hex')}`, `${newEndTime}`); 
      }
    }
  };
  
  const handleIsStart = async () => {
    try {
      if(user){
        await isStarted().unwrap()
          .then(() => {
              // toast.success(dict.data_saved);
              handleClaim()
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
        <h1>{user?.displayName}`s mannequin</h1>
        {/* <h1>Remaining Time: {timer} seconds</h1> */}
      </div>

      <div className={styles.mannequin_icon}> 
          <Image src={mannequin} alt='mannequin' width={500} height={500} className={styles.mannequin_icon_img}/>
      </div>

      <div className={styles.mannequin_earn}>
        <div className={styles.mannequin_earn_amount}>
          <Image src={coin} alt='coin' width={16} height={16} style={{marginBottom: '1px', zIndex: 3}}/>
          <p> {coins} </p>  
        </div>

        <div className={styles.mannequin_earn_line}></div>
        <button className={styles.mannequin_earn_claim}  onClick={timer === 0 ? handleClaim : () => {}}> 
          {
            user && user.isStarted === true ? (
              <div className={styles.mannequin_earn_claim_container}>
                {
                  timer === 0 ? (
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
            timer !== 0 && <Image src={sparkGIF} alt="GIF"  className={styles.mannequin_effects_spark}/>
          }
          <Image src={user ? user.inventory.filter(item => item.type === 'cap')[0].image : ''} width={100} height={100} alt='' className={`${styles.mannequin_effects_cap} ${timer !== 0  ? '' : `${styles.move_left}`}`} />
          <Image src={user ? user.inventory.filter(item => item.type === 'tshirt')[0].image : ''} width={200} height={200} alt=''  className={`${styles.mannequin_effects_tshirt} ${timer !== 0  ? '' : `${styles.move_right}`}`} />
          <Image src={user ? user.inventory.filter(item => item.type === 'trousers')[0].image : ''} width={200} height={200} alt='' className={`${styles.mannequin_effects_trousers} ${timer !== 0  ? '' : `${styles.move_left}`}`} />
          <Image src={user ? user.inventory.filter(item => item.type === 'sneakers')[0].image : ''} width={160} height={160} alt='' className={`${styles.mannequin_effects_sneakers} ${timer !== 0  ? '' : `${styles.move_right}`}`} />
      </div>
    </div>
  )
}

export default Mannequin