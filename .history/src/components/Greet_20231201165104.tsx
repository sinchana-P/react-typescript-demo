import React from 'react'

type GreetProps = {
    
}

export const Greet = (props) => {
  return (
    <h2>Hello { props.name } </h2>
  )
}

// export default Greet