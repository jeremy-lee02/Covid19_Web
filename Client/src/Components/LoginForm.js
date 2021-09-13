import React,{useEffect,useState} from 'react'
import '../style/Login.css'
import { useHistory } from 'react-router-dom'
const axios = require('axios');

export default function LoginForm() {
    const history = useHistory()
    const [data,setData] = useState([])
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const endPoint = "http://localhost:4000/login"
    const loginHandle = async (e)=>{
        e.preventDefault()
        if ((email || password) === '') {
            setEmail('')
            setPassword('')
            setTimeout(()=>{
                setError('')
            }, 5000)
            return setError('All input is required')
        } 
        try {
            const response = await axios.post(endPoint)
            if (response.data.success)
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (error) {
            if(error.response.data) return setError(error.response.data)
            else return{success:'false', message: error.message}
        }
        
    }


    return (
        <div className="app">
            <div className="containerr">
                <div className="loginForm">
                    <h2 className="text-center" style={{color:"blue"}}>Login</h2>
                    {error&&<p style={{color:"red"}}>*{error}</p>}
                    <input placeholder="Email" type="text" className="inputField input" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                    <input placeholder="Password" type="text" className="inputField input" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <div className="submitButton">
                        <button className="button" onClick={loginHandle}>Login</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}