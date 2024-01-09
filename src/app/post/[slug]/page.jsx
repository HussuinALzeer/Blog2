"use client"
import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'

import Comments from '../../../components/comments/Comments'

import {motion} from 'framer-motion'

const getData = async  (slug) =>{
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
      cache:"no-store"
    })
  
    if(!res.ok){
      throw new Error("failed")
    }
  
    return res.json()
  }



const SinglePage = async ({params}) => {

    const {slug} = params
    const data = await getData(slug)

    if(!data){
        return <div className="">empty</div>
    }

    const variants = {
        hidden:{ opacity:0},
        visible : { opacity:1}
    }
    
  return (
    <motion.div
    
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
        ease:"easeInOut",
        duration:0.5
    }}
    exit={{opacity:0}} 
    
    className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{data?.title} </h1>
                <div className={styles.user}>
                    {data?.user.image &&
                        <div className={styles.userImageContainer}>
                            <img src={data.user.image} alt='' fill  className={styles.avatar} />
                        </div>
                    }
                    
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>{data?.user.name}</span>
                        <span className={styles.date}>01.01.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.ImageContainer}>
                <Image src="/bokeh-cover-bg.jpg" alt='' fill  className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.desc} dangerouslySetInnerHTML={{__html:data?.desc}} />
                
                <div className={styles.comments}>
                    <Comments postSlug={slug} />
                </div>

            </div>
            <Menu/>
        </div>
    </motion.div>
  )
}

export default SinglePage


