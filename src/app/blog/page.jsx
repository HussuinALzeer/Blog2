"use client"
import React from 'react'
import styles from './blogPage.module.css'

import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import {motion} from 'framer-motion'
function Page({searchParams}) {

  const page = parseInt(searchParams.page)  || 1
  const {cat} = searchParams

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
    exit={{opacity:0}} className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </motion.div>
  )
}

export default Page
