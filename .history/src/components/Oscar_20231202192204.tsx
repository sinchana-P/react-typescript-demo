import React from 'react'

type OscarProps = {
    // children: string   --- wrong---
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
  return (
      <div>{ props.children }</div>
  )
}

export default Oscar