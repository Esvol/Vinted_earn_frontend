import Image from "next/image";
import styles from "./page.module.scss";
import Card from "../../components/Card";

import { cap1, sneakers1, trousers1, tshirt1 } from "../../img/images";
import Mannequin from "../../components/Mannequin";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home_cards}>
        <Card img={cap1} title='Green cap' level={1} earning={0.12} first={true} left={true}/>
        <Card img={trousers1} title='Green trousers' level={1} earning={0.17} left={true}/>
      </div>

      <div className={styles.home_mannequin}>
        <Mannequin />
      </div>

      <div className={styles.home_cards}>
        <Card img={tshirt1} title='Green t-shirt' level={1} earning={0.21} first={true} />
        <Card img={sneakers1} title='Green sneakers' level={1} earning={0.14}/>
      </div>
    </section>
  );
}
