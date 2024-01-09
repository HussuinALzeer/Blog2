import React from 'react'
import styles from  './catagoryList.module.css'
import Link from 'next/link'

const getData = async  () =>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("failed")
  }

  return res.json()
}

const CategoryList = async () => {


  const colors = ["#57c4ff", "#da85c7", "#7fb881", "#ff795736" , "#ffb04f45", "#5e4fff31"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const data = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        
          {data?.map ((item) =>(
            <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles.style}`} style={{backgroundColor:getRandomColor()}}>
            <img src={`/categories/${item.img}`} alt='image' width={32} height={32} className={styles.image} />
            {item.title}
          </Link>
          ))}

      </div>
    </div>
  )
}

export default  CategoryList
