'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { coin, mannequin } from '../../img/images'

import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";

const Mannequin = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(400);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(prevCount => Number((prevCount + 0.42).toFixed(2)));
        setTimer(prevCount => Number((prevCount - 0.42).toFixed(2)));
      }, 1000);
  
      return () => clearInterval(intervalId); 
    }, []);
      

  return (
    <div className={styles.mannequin}>
        <div className={styles.mannequin_icon}> 
            <Image src={mannequin} alt='mannequin' className={styles.mannequin_icon_img}/>
        </div>
        <div className={styles.mannequin_earn}>
            <button className={styles.mannequin_earn_claim}>
                <LuCircleDashed fontSize={14} className={styles.mannequin_earn_claim_wait}/>
                Farming
                <div>
                  {count}
                </div>
                <Image src={coin} alt='coin' width={16} height={16} style={{marginBottom: '1px'}}/>
            </button>
            <div className={styles.mannequin_earn_info}>
                <MdOutlineTimer fontSize={14} className={styles.mannequin_earn_info_timer}/>
                2 h 45 min
            </div>
        </div>
    </div>
  )
}

export default Mannequin