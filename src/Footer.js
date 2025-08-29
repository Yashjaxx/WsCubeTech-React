import React from 'react'
import web from './images/Yash Image.png'

export default function Footer(props) {
  console.log(props.email)
  return (
    <div className='demo'>
      <img width={60} src={web}></img>
      <h1>Footer Part {props.email}</h1>
      <p>This is a footer part.</p>
    </div>
  )
}
