import React,{useEffect,useState} from 'react'
import '../style/Login.css'

const axios = require('axios');

export default function LoginForm() {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const endPoint = "/login"

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            window.location = '/'
        }
    },[])
    const loginHandle = async (e)=>{
        e.preventDefault()
        const config = {
            header:{"Content-Type":'application/json'}
        }
        try {
            const {data} =await axios.post(endPoint,{
                    email: email,
                    password: password
            },config)
            localStorage.setItem('authToken',data.token)
            localStorage.setItem('email',email)
            window.location= '/'
        } catch (error) {
            setError(error.response.data.error)
            setEmail('')
            setPassword('')
            setTimeout(()=>{
                setError("")
            },6000)
        }
    }
    return (
        <div className="app">
            <div className="containerr">
                <div className="loginForm">
                    <h2 className="text-center" style={{color:"blue"}}>Login</h2>
                    {error&&<p style={{color:"red"}}>*{error}</p>}
                    <input placeholder="Email" type="text" className="inputField input" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                    <input placeholder="Password" type="password" className="inputField input" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <div className="submitButton">
                        <button className="button" onClick={loginHandle}>Login</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}