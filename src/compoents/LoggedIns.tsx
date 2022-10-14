import {useState} from 'react'

export const Loggedins = () => {
    const [isLoggedIn, setLoggedIn]=useState(false)
    const handleLogin=()=>{
        setLoggedIn(true)
    }
    const handleLogout=()=>{
        setLoggedIn(false)
    }
    return <div>
<button onClick={handleLogin}>Login</button>
<button onClick={handleLogout}>Logout</button>
<div>isLoggedIn.length ?"Loggedin":"Loggedout"</div>
    </div>
}