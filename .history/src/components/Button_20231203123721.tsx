import React from 'react'

type ButtonProps = {
  // handleClick: () => void
  handleClick: (event?: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick}>Click</button>
  )
}

export default Button

