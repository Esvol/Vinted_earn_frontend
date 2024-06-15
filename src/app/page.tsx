import Image from "next/image";
import styles from "./page.module.scss";
import Card from "../../components/Card";

import { cap0, sneakers0, trousers0, tshirt0 } from "../../img/images";
import Mannequin from "../../components/Mannequin";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home_cards}>
        <Card img={cap0} title='Green cap' level={0} earning={0.12} first={true} left={true}/>
        <Card img={sneakers0} title='Green trousers' level={0} earning={0.17} left={true}/>
      </div>

      <div className={styles.home_mannequin}>
        <Mannequin />
      </div>

      <div className={styles.home_cards}>
        <Card img={trousers0} title='Green t-shirt' level={0} earning={0.21} first={true} />
        <Card img={tshirt0} title='Green sneakers' level={0} earning={0.14}/>
      </div>
    </section>
  );
}
