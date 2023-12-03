import React from 'react'

type ButtonProps = {
  // handleClick: () => void
  handleClick: (event: React.Mou) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button

