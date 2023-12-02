import React from 'react'

type PersonProps = {
    first: string,
    last: string
}

const Person = (props: PersonProps) => {
    return (
        <div>{ props.first }  { props.last }</div>
  )
}

export default Person