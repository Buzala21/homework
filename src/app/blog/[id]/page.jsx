"use client"
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";




const BlogPost = async () => {
// let name ="saba"
//   useEffect(()=>{
//     console.log("hello")
//   },[name])

  return (
    <div className={styles.container} >
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, tempora.
          </p>
          <div className={styles.author}>
            <Image
              src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>test testidze</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         test context
        </p>
      </div>
    </div>
  );
};

export default BlogPost;