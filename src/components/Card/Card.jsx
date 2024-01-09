
import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card =({item ,key}) => {


  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src={`/${item.img}`} alt='image'  fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createAt.substring(0, 10)}</span>
                <span className={styles.category}> - {item.catSlug}</span>    
            </div>

            <Link href={`/post/${item.slug}`}>
                <div className={styles.title}>{item.title}</div>
            </Link>
            <p className={styles.desc}>{item.desc.substring(0, 50)}</p>

            <Link href={`/post/${item.slug}`} className={styles.link}> Read more</Link>
 
          </div>
    </div>
  )
}

export default Card
