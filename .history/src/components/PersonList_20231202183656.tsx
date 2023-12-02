import React from 'react'

type PersonListProps = {
    names: {
        
    }[]     // array of objects
}

const PersonList = () => {
  return (
      <div>
          <h2>Bruce Wayne</h2>
          <h2>Clark Kent</h2>
          <h2>Princess Diana</h2>
    </div>
  )
}

export default PersonList