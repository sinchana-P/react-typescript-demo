import React from 'react'

type OscarProps = {
    // children: string   
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
  return (
      <div>{ props.children }</div>
  )
}

export default Oscar