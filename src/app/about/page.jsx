import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

function about() {
  return (
    <main className={styles.container} >
      <div className={styles.imgContainer}>
        <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt='group photo'
        className={styles.img}
        />
        

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
        </div>
       
        
        <section className={styles.textcontainer}>
          <div className={styles.item}>
          <h1>Who Are We</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda consequatur, asperiores laborum esse at ullam est ipsum! Asperiores in esse voluptas porro aperiam omnis, explicabo ratione consequuntur maiores iure!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem. Temporibus nihil in quam impedit earum, fugiat recusandae voluptatem! Debitis veritatis incidunt blanditiis consequuntur illum maxime nostrum quae, velit sapiente.
          </p>
          </div>
          <div className={styles.item}>
            <h1>What We Do</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis quam aperiam eum, illo cupiditate temporibus fugit neque adipisci sed, nisi nesciunt sapiente minus voluptatum quaerat quod, saepe ducimus! Ad?
            <br />
            <br /> 
            - Dynamic Websites
            <br />
            <br /> 
            - Fast and Handy
            <br />
            <br /> 
            - Mobile Apps
              
            </p>
           <Button title={"contact"} url={"/contact"} />
          </div>
        </section>
    </main>
  )
}

export default about

