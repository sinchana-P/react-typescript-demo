import React, {useState} from 'react'

type AuthUser = {
    
}

export const User = () => {
    const [user, setUser] = useState()
    const handleLogin = () => {}
    const handleLogout = () => { }
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <div>User Name is </div>
    </div>
  )
}

