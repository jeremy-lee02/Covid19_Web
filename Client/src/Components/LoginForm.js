import React from 'react'
import '../style/Login.css'

export default function LoginForm() {
    return (
        <div className="app">
            <div className="containerr">
                <div className="loginForm">
                    <h2 className="text-center" style={{color:"blue"}}>Login</h2>
                    <input placeholder="Email" type="text" className="inputField input"></input><br/>
                    <input placeholder="Password" type="text" className="inputField input"></input>
                    <div className="submitButton">
                        <button className="button">Login</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}