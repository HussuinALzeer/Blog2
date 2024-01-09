"use client"

import React from 'react'
import styles from './toggle.module.css'
import Image from 'next/image'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { login } from '@/redux/features/auth-slice'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '@/redux/store'



function Toggle() {

  const [togg, setTogg] = useState('amjad')

  const state = useSelector((state) => state.authReducer)

  const {isAuth ,userName ,uid ,isModerator} = state.value

  const dispatch = useDispatch()

  const toogle = () =>{
    
    dispatch(login())

  }



  return (
    <div className={styles.container} style={isAuth ? {background:"white"} : {background:'#0f172a'}}>
        <Image src="/moon.png" alt='' className={styles.img} width={16} height={10}  />
        <div className={isAuth ? styles.ball : styles.ballr } onClick={toogle} style={isAuth ? {background:"#0f172a"} : {background:'white'}} ></div>
        <Image src="/sun.png" alt='' className={styles.img} height={10} width={16}  />
    </div>
  )
}

export default Toggle
