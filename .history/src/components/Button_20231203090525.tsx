import React from 'react'

type ButtonProps = {
  handleClick: () => void
}

const Button = () => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button