import React from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom'

function Buttons() {
    const [isLogged, setIsLogged] = React.useState(false)
    React.useEffect(()=>{
        if(localStorage.getItem('authToken'))
        return setIsLogged(true)
    },[])
    const logOutHandle = ()=>{
        localStorage.clear()
        window.location = '/signIn'
    }



    return(
        <>
           {isLogged
           ?    <Link className="btn btn-primary rounded-pill me-3" onClick={logOutHandle} >Log Out</Link>
           :<>
            <Link className="btn btn-primary rounded-pill me-3" to="/signIn">Sign In</Link>
            <Link className="btn btn-primary rounded-pill" to="/register">Register</Link>
           </> 
        }
        </>

    )


}

export default Buttons
