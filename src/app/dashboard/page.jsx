// "use client"

// import React, { useEffect, useState } from 'react'

// function Dashboard() {
//   const  [myBoll,setMyBoll]=useState(false)

//   useEffect(() => {
//     console.log("hello")
//   },[myBoll])

//   return (
//     <div onClick={()=>{
//       setMyBoll(!myBoll)
//     }} 
//     >this is Dashboard</div>
//   )
// }

// export default Dashboard

"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Dashboard() {

  const  [url,setUrl]=useState('')

  useEffect(() => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(json => console.log(json))
  },[url])

  return (
    <div>
      <button onClick={() => {setUrl("https://jsonplaceholder.typicode.com/posts")}}>
             პირველი
      </button>
      <button onClick={() => {setUrl("https://api.escuelajs.co/api/v1/products%22")}}>
             მეორე
      </button>
      {/* "https://api.escuelajs.co/api/v1/products%22" */}
      
      <Link href={"/dashboard/crud"}>go to crud operations</Link>
      
      </div>
    
  )
}

export default Dashboard