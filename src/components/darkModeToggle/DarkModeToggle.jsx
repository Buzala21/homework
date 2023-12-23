"use client"
import React from 'react'
import styles from "./darkModeToggle.module.css"

function DarkModeToggle() {
  console.log("rendered")
  return (
    <div className={styles.container} onClick={() => console.log("hello222")} >
    <div className={styles.icon}>🌙</div>
    <div className={styles.icon}>🔆</div>
    <div className={styles.ball}/>
    
  </div>
  )
}

export default DarkModeToggle