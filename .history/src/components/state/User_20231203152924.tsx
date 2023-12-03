import React, {useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Sinch',
            email: 'sinch.fsd@gmail.com'
        })
    }
   
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
          {/* <button onClick={handleLogout}>Logout</button> */}
          <div>User Name is {user.name} </div>
          <div>User Email is {user.email} </div>
    </div>
  )
}
// export const User = () => {
//     const [user, setUser] = useState<AuthUser | null>(null)

//     const handleLogin = () => {
//         setUser({
//             name: 'Sinch',
//             email: 'sinch.fsd@gmail.com'
//         })
//     }
//     const handleLogout = () => {
//         setUser(null)
//     }
    
//   return (
//     <div>
//         <button onClick={handleLogin}>Login</button>
//           <button onClick={handleLogout}>Logout</button>
//           <div>User Name is {user?.name} </div>
//           <div>User Email is {user?.email} </div>
//     </div>
//   )
// }

// Note:
// We have to explicitly specify the type for the useState hook, and not rely on the "Type Inference".
// It's initial value is null, but in the future its value can be of type AuthUser.
// useState<AuthUser | null>(null)

// Always have to check, if the object exists, before accessing it's properties.
// user?.email
// So, the optional chaining in applied here by typescript. as it can have value (either null or AuthUser).

// Note2:
// If u r confident that user will be initialized soon after 