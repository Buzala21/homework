import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.mainContainer} >
      <Link href={"/blog/123"} className={styles.container} >
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
            <h1 className={styles.title}>
              Blog Title
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quam nisi, temporibus odio aliquam repellat tempora accusantium facilis magnam deserunt nulla hic? Neque obcaecati totam voluptas maiores tenetur ipsam modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto harum iusto asperiores corporis voluptatibus consequuntur enim repellat velit iure tenetur, sequi magni 
            </p>
          </div>

        
      </Link>

      <Link href={"/blog/123"} className={styles.container} >
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
            <h1 className={styles.title}>
              Blog Title
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quam nisi, temporibus odio aliquam repellat tempora accusantium facilis magnam deserunt nulla hic? Neque obcaecati totam voluptas maiores tenetur ipsam modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto harum iusto asperiores corporis voluptatibus consequuntur enim repellat velit iure tenetur, sequi magni 
            </p>
          </div>

        
      </Link>

      <Link href={"/blog/123"} className={styles.container} >
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
            <h1 className={styles.title}>
              Blog Title
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quam nisi, temporibus odio aliquam repellat tempora accusantium facilis magnam deserunt nulla hic? Neque obcaecati totam voluptas maiores tenetur ipsam modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto harum iusto asperiores corporis voluptatibus consequuntur enim repellat velit iure tenetur, sequi magni 
            </p>
          </div>

        
      </Link>
    </div>
  )
}

export default Blog