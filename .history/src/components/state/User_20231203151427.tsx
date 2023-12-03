import React, {useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState(null)
    const handleLogin = () => {}
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

