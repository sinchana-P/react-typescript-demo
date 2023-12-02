import React from 'react'

type PersonProps = {
    name: {
        first: string
        last: string
    }
}

const Person = (props: PersonProps) => {
    return (
        <div>{ props.name.first }  { props.last }</div>
  )
}

export default Person