import React,{useState,useEffect}from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

function Buttons() {
    const [isLoggedIn,setIsLoggedIn] =useState(false)
    const history = useHistory()
    const logOutHandle = ()=>{
        localStorage.removeItem("authToken")
        history.push('/SignIn')
    }

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    }, [])

    return(
        <>
           {isLoggedIn
           ?    <Link className="btn btn-primary rounded-pill me-3" onClick={logOutHandle}>Log Out</Link>
           : <>
            <Link className="btn btn-primary rounded-pill me-3" to="/signIn">Sign In</Link>
            <Link className="btn btn-primary rounded-pill" to="/register">Register</Link>
           </> 
        }
        </>

    )


}

export default Buttons
