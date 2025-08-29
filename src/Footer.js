import React from 'react'
import web from './images/Yash Image.png'
import Button from 'react-bootstrap/Button';

export default function Footer(props) {
  const showNaam=(name)=>{
    alert(`Hello, ${name} How Can I Help you?`)
  }
  return (
    <div className='demo'>
      <img width={60} src={web}></img>
      <h1>Footer Part {props.email}</h1>
      <Button variant="success" onClick={()=>showNaam('Yash')}>Save </Button>
      <p>This is a footer part.</p>
    </div>
  )
}
