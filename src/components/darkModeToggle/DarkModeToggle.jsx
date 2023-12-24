"use client"
import React, { useContext, useState } from 'react'
import styles from "./darkModeToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext'

function DarkModeToggle() {
  // const [light, setLight] = useState("left")

  const {toggle,mode} = useContext(ThemeContext)
  
  return (
    <div className={styles.container}
    onClick={toggle}
//      onClick={() =>{
//       if (light === "left") {
//         setLight("right") 
//       } else {
//         setLight("left") 
//       }
// }}
>
    <div className={styles.icon}>🌙</div>
    <div className={styles.icon}>🔆</div>
    <div className={styles.ball} 
    style={mode === "dark" ? {left:"2px"}  :{right:"2px"}}
    />
    
  </div>
  )
}

export default DarkModeToggle