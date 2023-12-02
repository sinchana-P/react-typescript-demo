import React from 'react'

type GreetProps = {
    name: string
  messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <h2>
      {
        props.isLoggedIn
      }
      Hello {props.name} {props.messageCount}
    </h2>
  )
}

// export default Greet


// 2 benefits
// 1. Autocompletion of properties suggestion
// 2. Type Safety

// Types vs Interfaces
// 1. use Types- Application
// 2. inter - Libraries