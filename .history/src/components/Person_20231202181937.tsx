import React from 'react'

type PersonProps = {
    name: {
        first: str
    }
}

const Person = (props: PersonProps) => {
    return (
        <div>{ props.name.first }  { props.last }</div>
  )
}

export default Person