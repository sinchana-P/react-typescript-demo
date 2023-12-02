import React from 'react'

type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
  return (
      <div>{ props }</div>
  )
}

export default Oscar