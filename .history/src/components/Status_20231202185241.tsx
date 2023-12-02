import React from 'react'

type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data Fetched Successfully!'
    } else if (props.status === 'error') {
        message = ''
    }
  return (
    <div>
        <h2></h2>
        <h2></h2>
        <h2></h2>
    </div>
  )
}

export default Status