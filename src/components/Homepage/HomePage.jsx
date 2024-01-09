"use client"
import React from 'react'
import styles from '../../app/homepage.module.css'
import Featured from "../../components/featured/Featured"
import CategoryList from '../../components/CategoryList/CatagoryList'
import CardList from '../../components/CardList/CardList'
import Menu from '../../components/Menu/Menu'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'
import { useEffect } from 'react';

import { saveScrollPosition, getScrollPosition } from '../../utils/scrollUtils';


const HomePage = ({page}) => {

        const variants = {
            hidden:{ opacity:0},
            visible : { opacity:1}
        }

        useEffect(() => {
            // Save scroll position when the component is unmounted
            return () => {
              saveScrollPosition();
            };
          }, []);
        

  return (
    <AnimatePresence mode='wait'>
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
    


    <Featured/>
    <CategoryList/>

      <motion.div
       

      
      className={styles.content}>
        <CardList page={page}  />
        <Menu/>
      </motion.div>
   </motion.div>
   </AnimatePresence>

  )
}

export default HomePage
