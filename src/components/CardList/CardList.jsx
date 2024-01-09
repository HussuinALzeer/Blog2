"use client"
import React, { useEffect, useState } from 'react';
import styles from '../CardList/cardList.module.css';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

const getData = async (page ,cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || "" }`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const CardList = ({ page , cat }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(page , cat);
        setData(result);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item) => (
          <Card key={item._key} item={item}  />
        ))}
      </div>
      <Pagination page={page}/>
    </div>
  );
};

export default CardList;