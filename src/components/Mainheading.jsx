import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Mainheading = (props) => {
  return (
    <>
    <h1 className="main-heading" style={{ textAlign:`${props.textalign}`,color:`${props.color}`, fontSize:`${props.size}`}}>{props.title}&nbsp;
     <span>{props.subtitle}</span>
    </h1>
    </>
  )
}

export default Mainheading