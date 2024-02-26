import React from 'react'
import Card from './Card'
import Image from 'next/image'
import styles from './page.module.css'
import AppearFromBottom from './AppearFromBottom'
const data = [
    {   
        id: 1,
        img: '/CC.webp',
        heading: 'CREDIT CARDS',
        imgAlt: 'credit card with flight',
        para: '100% Contactless Application Process with Instant Approval From Top Banks.',
        color: "#edffec"
    },
    {   
        id: 2,
        img: '/Loan.webp',
        imgAlt: 'loan',
        heading: 'LOANS',
        para: '100% online process. Instant offers. Affordable Rate of Interest on loans.',
        color: '#fff1ca'
    },
    {
        id: 3,
        img: '/BNPL.webp',
        imgAlt: 'shop-cart',
        heading: 'BUY NOW PAY LATER',
        para: 'Short-term financing that allows consumers to make purchases and pay for them over time.',
        color: '#ffeee7'
    },
    {
        id: 4,
        img: '/AccountSave.webp',
        imgAlt: 'bank',
        heading: 'SAVING ACCOUNTS',
        para: 'ZET offers range of savings account that suits your personal needs for the banking.',
        color: '#fff5e7'
    }
]

const cards = data.map(d => {
    return <div className={styles['appear-from-bottom']}><Card img={d.img} key={d.id} color={d.color} heading={d.heading} para={d.para} imgAlt={d.imgAlt} /></div>
})

export default function Component() {
    return (
        <AppearFromBottom>
        <div>
        <div className={styles.main_container}>
            <div className={styles.title_container}>
                <p className={styles.title_head}>Products on ZET</p>
                <p className={styles.title_line}>We are trusted by best brand in the country</p>
            </div>
            <div className={styles.container}>
            {cards}
            </div>
            <Image src="./bg.svg" alt="bg" loading='lazy' width={801} height={801}  className={styles.card_bg_upper} />
            <Image src="./bg.svg" alt="bg" loading='lazy' width={801} height={801}  className={styles.card_bg_lower} />
        </div>
        </div>   
        </AppearFromBottom>
    )
}