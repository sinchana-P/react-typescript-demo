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
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          
      }
      
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