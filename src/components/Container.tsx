// 7. Style Props

import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
        <div style={props.styles}>
          Text content goes here
        </div>
        // <div style={{ border: '1px solid black', padding: '1rem' }}>
        //   Text content goes here
        // </div>
  )
}
