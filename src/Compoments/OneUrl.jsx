import React from 'react'
import ImageDIv from './ImageDiv'
export default function OneUrl(props) {
  return (
    <div className='col'>
      <div className='container'>
        <h4 className=''>
          <a href={props.link.url}>{props.link.name}</a>
        </h4>
        <div className=''> 
          <div className=''>
            {
              props.link.describe.map((d,i)=>{
                return <p>{d}</p>
              })
            }
          </div>
          <div className=''>
            {
              props.link.images.map((d,i)=>{
                return <ImageDIv name={props.link.name} key={i} img ={d} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
