import React from 'react'
import '../style/Login.css'




export default function RegisterForm() {
    return (
        <div>
            <div className="app">
                <div className="containerr">
                    <div className="loginForm">
                        <h2 className="text-center" style={{color:"blue"}}>Register</h2>
                        <input placeholder="Email" type="text" className="inputField input"></input><br/>
                        <input placeholder="Password" type="text" className="inputField input"></input>
                        <input placeholder="Re-type Password" type="text" className="inputField input"></input>
                        <input placeholder="First Name" type="text" className="inputField input"></input><br/>
                        <input placeholder="Last Name" type="text" className="inputField input"></input><br/>
                        <input placeholder="Address" type="text" className="inputField input"></input><br/>
                        <input placeholder="Phone" type="text" className="inputField input"></input><br/>
                        <div className="submitButton">
                            <button className="button">Register</button>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    )
}
