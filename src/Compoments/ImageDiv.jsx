import React from 'react'

export default function Image(props) {
  return (
      <img className={props.name.includes('gym' || 'bank' || 'garage') ? 'screenshots':'screenshotsMobile'} src={props.img} alt='examplImg'></img>

  )
}
