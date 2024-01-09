import React from 'react'
import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                <Image src="/bokeh-cover-bg.jpg" fill  alt='' className={styles.image} />
              </div>
            )}
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusantium!</h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage && (
                <div className={styles.imageContainer}>
                <Image src="/bokeh-cover-bg.jpg" fill  alt='' className={styles.image} />
              </div>
            )}
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusantium!</h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
                <div className={styles.imageContainer}>
                <Image src="/bokeh-cover-bg.jpg" fill alt='' className={styles.image} />
              </div>
            )}
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusantium!</h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
                <div className={styles.imageContainer}>
                <Image src="/bokeh-cover-bg.jpg" fill  alt='' className={styles.image} />
              </div>
            )}
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusantium!</h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
      
  )
}

export default MenuPosts
