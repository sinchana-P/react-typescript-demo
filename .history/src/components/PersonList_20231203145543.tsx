import React from 'react'

import { Name } from './Person.types'

type PersonListProps = {
    names: Name[]
}

// type PersonListProps = {
//     names: {
//         first: string
//         last: string
//     }[]     // array of objects
// }

const PersonList = (props: PersonListProps) => {
  return (
      <div>
          
          {
              props.names.map((name, index) => {
                  return (
                      <h2 key={index}>{name.first} { name.last }</h2>
                  )
              })
          }

          {/* <h2>Bruce Wayne</h2>
          <h2>Clark Kent</h2>
          <h2>Princess Diana</h2> */}
    </div>
  )
}

export default PersonList