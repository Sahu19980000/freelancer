import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className={props.classname} onClick={props.onclick}>
       {props.title}
    </button>
    </>
  )
}

export default Button