import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
export default function Image(props) {
  const [name, setName] = useState(props.name.includes('Bank' || 'Gym' || 'Garage'))
  useEffect(() => {
    let n = props.name;
    if (n.includes('Bank') || n.includes('Gym') || n.includes('Garage')){
      setName(false)
    }else{
      setName(true)
      
    }
    // setName(props.name.includes('Gym' || 'Bank' || 'Garage'))
  });
  
  return (
      <img className={name ? 'screenshots' : 'screenshotsMobile'} src={props.img} alt='examplImg'></img>

  )
}
