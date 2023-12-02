import React from 'react'

type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === '')
  return (
    <div>
        <h2></h2>
        <h2>Data Fetched Successfully!</h2>
        <h2>Error Fetching Data</h2>
    </div>
  )
}

export default Status