import React, { useEffect, useState } from 'react'
import rgbToHex from '../utils'

const SingleColor = ({rgb,weight,index}) => {
  const[alert,setAlert]=useState(false)
  
  const bcg=rgb.join(',');
  
   
  const hex=rgbToHex(...rgb)
  // hex i values kutuphanesinin gonderdigi hex den de alabilirdik
  // biz stackoverflow dan bir fonksiyon aldik rgb yi hex e ceviren
  

    useEffect(()=>{
      const timeOut= setTimeout(()=>{
        setAlert(false)
      },2000)

    return () =>clearTimeout(timeOut)

    },[alert])

  return (
    <div className={`single-color ${index>10&&'color-light'}`}
    style={{ backgroundColor:`rgb(${bcg})` }}
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hex)
    }}
    >
     <p> {weight}%</p> 
     <p>{hex}</p>

     {alert? <p>copied to clipboard</p>: <p>click to copy </p> }
    </div>
  )
}

export default SingleColor