import React from 'react'

export default function Footer(props) {
  console.log(props.email)
  return (
    <div className='demo'>
      <h1>Footer Part {props.email}</h1>
      <p>This is a footer part.</p>
    </div>
  )
}
