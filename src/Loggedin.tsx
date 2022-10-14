import {useState} from 'react'
type AuthUser={
    name:string,
    email:string
}

export const Loggedin = () => {
    const [user, setUser]=useState<AuthUser>({} as AuthUser  )
    const [isLoggedIn, setLoggedIn]=useState(false)
    const handleLogin=()=>{
        setUser({
            name:"sai",
            email:"sai@gmail.com"
        });
    
    }
    // const handleLogout=()=>{
    //     setLoggedIn(false)
    // }
    return <div>
<button onClick={handleLogin}>Login</button>
{/* <button onClick={handleLogout}>Logout</button> */}
<div>isLoggedIn.length ?"Loggedin":"Loggedout"</div>
<h1>{user?.email}{user?.name}</h1>
    </div>

}