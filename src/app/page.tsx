'use client'

import styles from "./page.module.scss";
import Card from "../../components/Card";

import Mannequin from "../../components/Mannequin";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slices/auth";
import ReferralCard from "../../components/ReferralCard";
import Image from "next/image";

const Home = () => {
  const user = useSelector(selectUser)
  const time = user?.inventory[4].speed

  if(!user){
    return <p></p>
  }

  return (
    <section className={styles.home}>
      <div className={styles.home_cards}>
        <Card title='cap' card={{...user.inventory[0], time}} first={true} left={true}/>
        <Card title='trousers'  card={{...user.inventory[1], time}} left={true}/>
      </div>

      <div className={styles.home_mannequin}>
        <Mannequin />
      </div>

      <div className={styles.home_cards}>
        <Card title='t-shirt' card={{...user?.inventory[2], time}} first={true} />
        {
          user.accessories.length !== 0 && (
            <div className={styles.home_cards_accessories}>
              <Image src={user.accessories[0].image} alt="coin" width={10} height={10} className={styles.home_cards_accessories_icon}/>
              <div className={styles.home_cards_accessories_info}>
                <p>{user.accessories[0].title}</p>
                <span>{user.accessories[0].speed} coin / 1 hour</span>
              </div>
            </div>
          )
        }
        <Card title='sneakers' card={{...user?.inventory[3], time}} />
      </div>

      {
        !user.isReferral && (
          <div className={styles.home_referral}>
            <ReferralCard/>
          </div>
        )
      }
    </section>
  );
}

export default Home;