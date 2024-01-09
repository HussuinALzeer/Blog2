import React from 'react'
import styles from  '../featured/featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> <p className={styles.bold}>Lorem ipsum dolor sit amet</p> consectetur, adipisicing elit. Rerum.</h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/bokeh-cover-bg.jpg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, blanditiis?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque architecto tempora ipsa voluptates ab nemo totam quam earum doloribus eaque dolorum quidem qui. Consequuntur.</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured