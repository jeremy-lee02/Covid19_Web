import React, {useState,useEffect} from 'react'
import '../style/Login.css'

import axios from 'axios'

export default function RegisterForm() {
    
    // const [data,setData] = useState([])
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [dob,setDob] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [error, setError] = useState('')
    
    const endPoint = "https://covid-web-19-ayaka.herokuapp.com/register"

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            window.location = '/'
        }
    },[])
    const registerHandle = async(e)=>{
        e.preventDefault()
        const config = {
            header:{"Content-Type":'application/json'}
        }
        if(password!==rePassword){
            setPassword('');
            setRePassword('');
            setTimeout(()=>{
                setError("")
            },5000)
            return setError("Passwords do not match!!")
        }
        try {
            const {data} =await axios.post(endPoint,{
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    dob: dob,
                    phone: phone,
                    address: address
            },config)
            localStorage.setItem('authToken',data.token)
            localStorage.setItem('email',email)
            window.location = '/'
        } catch (error) {
            setError(error.response.data.error)
            setEmail('')
            setPassword('')
            setRePassword('')
            setTimeout(()=>{
                setError("")
            },5000)
        }

    }

     
    return (
        <div>
            <div className="app">
                <div className="containerr">
                    <form className="loginForm">
                        <h2 className="text-center" style={{color:"blue"}}>Register</h2>
                        {error&&<p style={{color:"red"}}>*{error}</p>}        
                        <input placeholder="Email" type="text" className="inputField input" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                        <input placeholder="Password" type="password" className="inputField input" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        <input placeholder="Re-type Password" type="password" className="inputField input" value={rePassword} onChange={(e)=>setRePassword(e.target.value)}></input>
                        <input placeholder="First Name" type="text" className="inputField input" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input><br/>
                        <input placeholder="Last Name" type="text" className="inputField input" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input><br/>
                        <input placeholder="Date Of Birth (DD//MM//YY)" type="text" className="inputField input" value={dob} onChange={(e)=>setDob(e.target.value)}></input><br/>
                        <input placeholder="Address" type="text" className="inputField input" value={address} onChange={(e)=>setAddress(e.target.value)}></input><br/>
                        <input placeholder="Phone" type="text" className="inputField input" value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br/>
                        <div className="submitButton">
                            <button className="button" onClick={registerHandle}>Register</button>
                        </div>
                    </form>

                </div>
            
            </div>
        </div>
    )
}
