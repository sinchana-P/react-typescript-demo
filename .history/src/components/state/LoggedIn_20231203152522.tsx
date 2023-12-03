import React, { useState } from 'react'

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
      <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <div>User is { isLoggedIn ? 'logged in' : 'logged out' }</div>
    </div>
  )
}
// const LoggedIn = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const handleLogin = () => {
//         setIsLoggedIn(true)
//     }
//     const handleLogout = () => {
//         setIsLoggedIn(false)
//     }

//   return (
//       <div>
//           <button onClick={handleLogin}>Login</button>
//           <button onClick={handleLogout}>Logout</button>
//           <div>User is { isLoggedIn ? 'logged in' : 'logged out' }</div>
//     </div>
//   )
// }

export default LoggedIn


// Note: Typescript is smart enough to infer what the state variable type is based on the initial value we pass in.