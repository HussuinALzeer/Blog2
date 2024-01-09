import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/cat.png" alt='' width={50} height={50} />
            <h1 className={styles.logoText}>Blog</h1>
          </div>

          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque error consectetur nesciunt exercitationem, asperiores quod neque mollitia consequuntur delectus aliquid sed unde nemo et soluta!</p>
          <div className={styles.icons}>
            <Image src='/facebook.png' alt='' width={18} height={18} />
            <Image src='/tiktok.png' alt='' width={18} height={18} />
            <Image src='/youtube.png' alt='' width={18} height={18} />
            <Image src='/instagram.png' alt='' width={18} height={18} />
          </div>
        
        </div>

        <div className={styles.links}>
          <div className={styles.list}>
              <span className={styles.listTitle}>Links</span>
              <Link className={styles.alink} href="/" >Homepage</Link>
              <Link href="/" >Blog</Link>
              <Link href="/" >About</Link>
              <Link href="/" >Contact</Link>
          </div>

          <div className={styles.list}>
              <span className={styles.listTitle}>Tags</span>
              <Link href="/" >style</Link>
              <Link href="/" >fashion</Link>
              <Link href="/" >coding</Link>
              <Link href="/" >Travel</Link>
          </div>

          <div className={styles.list}>
              <span className={styles.listTitle}>Social</span>
              <Link href="/" >Facebook</Link>
              <Link href="/" >instagram</Link>
              <Link href="/" >tiktok</Link>
              <Link href="/" >Youtube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer
