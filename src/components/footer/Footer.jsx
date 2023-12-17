import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container} >
      {/* ქაარი ქრის */}
      <div>@all rights reserved</div>
      <div className={styles.socialNetwork} >

        <Link target='blank' href={"https://www.facebook.com"}>
        <Image  src="/1.png" width={15} className={styles.icon} height={15} alt='facebook'/>
        </Link>

        <Link target='blank' href={"https://www.instagram.com"}>
        <Image src="/2.png" width={15} className={styles.icon} height={15} alt='instagram'/>
        </Link>

        <Link target='blank' href={"https://twitter.com/tvitter"}>
        <Image src="/3.png" width={15} className={styles.icon} height={15} alt='x'/>
        </Link>

        <Link target='blank' href={"https://www.youtube.com"}>
        <Image src="/4.png" width={15} className={styles.icon} height={15} alt='youtube'/> 
        </Link>

      </div>
    </div>

    
  )
}

export default Footer