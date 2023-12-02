import React from 'react'

type PersonProps = {
    first: string,
    last: string
}

const Person = (props: PersonProps) => {
    return (
        <div>{ props.first }  { }</div>
  )
}

export default Person