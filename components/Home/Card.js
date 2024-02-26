import Image from "next/image"

import styles from './page.module.css'

export default function Card(props) {

const cardStyle = {
    backgroundColor: props.color,
};

    return (
        <div className={styles.cards} style={cardStyle}>
          <div className={styles.card_img}>
            <Image alt={props.imgAlt} loading="lazy" width={160} height={160} decoding="async"  className={styles.card_image} src={props.img} />
          </div>
          <div className={styles.card_text}>
            <h3 className={styles.card_heading}>{props.heading}</h3>
            <p className={styles.card_para}>{props.para}</p>
          </div>
        </div>
    )
}