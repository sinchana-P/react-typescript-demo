import React from 'react'

type PersonListProps = {
    names: {
        first: string
        last: string
    }[]     // array of objects
}

const PersonList = (props: PersonListProps) => {
  return (
      <div>
          
          {
              props.names.ma
          }

          {/* <h2>Bruce Wayne</h2>
          <h2>Clark Kent</h2>
          <h2>Princess Diana</h2> */}
    </div>
  )
}

export default PersonList