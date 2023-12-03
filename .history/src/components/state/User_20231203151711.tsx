import React, {useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState(null)

    const handleLogin = () => {
        setUser({
            name: 'Sinch',
            email: 'sinch.fsd@gmail.com'
        })
    }
    const handleLogout = () => { 
        setUser(null)
    }
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <div>User Name is </div>
          <div>User Email is </div>
    </div>
  )
}

// Note: 
// We have to explicitly specify the type for the useSt, and not rely on the "Type Inference"