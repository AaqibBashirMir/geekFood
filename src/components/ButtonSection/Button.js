import React from 'react'
import './Button.css'
 
function Button(props) {
  return (
      <button id={props.id}>{props.buttonText}</button>
  )
}

export default Button
