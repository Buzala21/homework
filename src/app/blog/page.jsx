
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'



const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  if (!res.ok){
    throw new  Error ("There is no data")
  }
  
  return res.json()

}
// ? zevitas meore varianti

// const getData = () => {
//   fetch("ehaa")
//   .then((res)=> res.json())
//   .then((res) => res)
// }

async function Blog() {
  const data = await getData()
  

  return (
    <div className={styles.mainContainer} >
      {data.map(singleBlog => (
        <Link href={`/blog/${singleBlog.id}`} className={styles.container} >
        <div className={styles.imageContainer} >
        <Image
              src={"/pexels.jpg"}
              alt="Blog Image"
              width={400}
              height={250}
              className={styles.image}
            />

        </div>
        
          <div className={styles.content}>
            <h1 className={styles.title}>{singleBlog.title}</h1>
            <p className={styles.desc}> 
            {singleBlog.body}
            </p>
           
          </div>

        
      </Link>

      ))}
    </div>
  )
}

export default Blog