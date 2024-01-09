"use client"
import React from 'react'
import styles from  '../Pagination/pagination.module.css'
import { useRouter } from 'next/navigation'

function Pagination({page , hasPrev ,hasNext}) {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <button className={styles.button} 
        onClick={() => router.push(`?page=${page - 1}`) }
      >Previous page</button>
      
      <button className={styles.button} 
        onClick={() => router.push(`?page=${page + 1}`)} >Next page</button>
    </div>
  )
}

export default Pagination
