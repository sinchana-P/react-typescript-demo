import React from 'react'

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)
}

export const Input = (props: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        
    }
    
    return <input type='text' value={props.value} onChange={handleInputChange} />
}

// export const Input = (props: InputProps) => {
//   return <input type='text' value={props.value} onChange={props.handleChange} />
// }

// Note:
// It doesn't matter if u pass the event as a prop or define it within the component,
// Typing Event Arguments remain the same.

// 1. onClick
// 2. onChange
