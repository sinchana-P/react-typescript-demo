import React from 'react'

type PersonProps = {
    name: {
        for
    }
}

const Person = (props: PersonProps) => {
    return (
        <div>{ props.name.first }  { props.last }</div>
  )
}

export default Person