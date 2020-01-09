import React, { Component } from 'react'
import './login.css'
import './Home.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <header className="login-header-div">
                <Link to = '/'>
                    <h2 className="login-header">KhaboKoi</h2>
                    </Link>
                </header>
            <div className="login-form">
                <form className="form">        
                <p className="uname">Enter Name: <input className="text" type="text"></input> </p>
                <br></br>
                
                <p className="pass">Enter Password: <input type="password"></input></p>
                <br></br>
                <button className="logbtn">LOG IN</button>
                <br></br>
                </form>
                <p className="new">New To Khabokoi? <a className="link" href="signup.js">Sign Up Here</a></p>
            </div>
            </div>
        )
    }
}
