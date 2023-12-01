import React from 'react'

export const Greet = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <h2>Hello { props.name } </h2>
  )
}

// export default Greet