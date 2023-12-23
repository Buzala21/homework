import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'

const data=[
{id:0,name:"Creative Portfolio", src:"https://images.pexels.com/photos/6875562/pexels-photo-6875562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
{id:1,name:"Minimal Single Product", src:"https://images.pexels.com/photos/9039243/pexels-photo-9039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
{id:2,name:"Strong Togerther Charity", src:"https://images.pexels.com/photos/11101879/pexels-photo-11101879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]

function Category({params}) {
  
  console.log(params)
  return (
    <div className={styles.container} >
      <h1 className={styles.catTitle} >{params.category}</h1>
      {data.map((cat) => (

      <div key={cat.id} className={styles.item} >
        <div className={styles.content} >
          <h1 className={styles.title} >{cat.name}</h1>
          <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis, eaque, sed esse quia, nobis quo a minima excepturi placeat commodi eligendi repudiandae animi doloribus iure ratione. Voluptatum, rerum voluptates?</p>
          <Button title={"see more"} url={"/"} />
        </div>
        <div className={styles.imgContainer} >
        <Image
        src={cat.src}
        fill={true}
        alt='portfolio image'
        className={styles.img}
        />
        </div>
      </div>
      ))}
      </div>
  )
}

export default Category