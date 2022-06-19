import React from 'react'
import OneUrl from './OneUrl'
export default function Urls(props) {
  return (
      <div className='row'>
        {
            props.links.map(l=>{
                return <OneUrl link={l}/>
            })
        }
      </div>
  )
}
