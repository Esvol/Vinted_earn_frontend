'use client'

import styles from "./page.module.scss";
import Card from "../../components/Card";

import Mannequin from "../../components/Mannequin";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slices/auth";
import Loader from "../../components/Loader";

export default function Home() {

  const user = useSelector(selectUser)
  const time = user?.inventory[4].speed

  if(!user){
    return <Loader />
  }

  return (
    <section className={styles.home}>
      <div className={styles.home_cards}>
        <Card title='Green cap' card={{...user.inventory[0], time}} first={true} left={true}/>
        <Card title='Green trousers' card={{...user.inventory[1], time}} left={true}/>
      </div>

      <div className={styles.home_mannequin}>
        <Mannequin />
      </div>

      <div className={styles.home_cards}>
        <Card title='Green t-shirt' card={{...user?.inventory[2], time}} first={true} />
        <Card title='Green sneakers' card={{...user?.inventory[3], time}} />
      </div>
    </section>
  );
}
