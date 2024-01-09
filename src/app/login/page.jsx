"use client"
import React from 'react'
import styles from './login.module.css'
import {useSession,signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'

import {motion} from 'framer-motion'


const LoginPage = () => {

  const {data , status} = useSession();
  const router = useRouter()

  console.log(status);

  if(status === "loading"){
    return <div className={styles.loading}>Loading</div>
  }

  if(status === "authenticated"){
    router.push('/')
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
        <div className={styles.wrapper}>
            <div className={styles.socialBtn} onClick={ () => signIn("google")}>Sign in with Google</div>
            <div className={styles.socialBtn}>Sign in with Facebook</div>
        </div>
    </motion.div>
  )
}

export default LoginPage