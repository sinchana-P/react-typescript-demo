import React from 'react'

type ButtonProps = {
  handleClick: () => void
}

const Button = (props: ) => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button