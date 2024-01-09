"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

function AuthLinks() {

  const {status} = useSession()


  const [open, setOpen] = useState(false)

  return <>

    {status  === "unauthenticated" ? (
      <Link href="/login" className={styles.link}>login</Link>
    ) : (
      <>
            <Link href="/write">Write</Link>
            <span className={styles.link} onClick={() => signOut()}>Logout</span>

            
      </>

    )}

            <div className={styles.burger} onClick={ () => setOpen(!open)} >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>


            {open  &&  (
              <div className={styles.responsiveMenu}>
                <Link href='/' >Homepage</Link>
                <Link href='/' >Contact</Link>
                <Link href='/' >About</Link>
              </div>
            )}

  </>
}

export default AuthLinks
