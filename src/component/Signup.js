import React, { Component } from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <header className="signup-header-div">
                <Link to='/'>
                    <h2 className="signup-header">KhaboKoi</h2>
                    </Link>
                </header>
                <div className="signup-form">
                <form className="forms">
                <p>Enter Name: <input type="text" className="name"></input> </p>
                <br></br>
                <p>Enter Password: <input type="password" className="pas"></input></p>
                <br></br>
                <p>Confirm Password: <input type = "password" className="cpass"></input></p>
                <br></br>
                <p>Enter Email Address: <input type="text" className="email"></input></p>
                <br></br>
                <p className="phone">Enter Phone Number:
                <select className="selection">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>America</option>
                </select>
                <input type= "number" className="ree"></input>
                </p>
                <br></br>
                <button className="logbtn">SIGN UP</button>
                <br></br>
                </form>
                
                <p>Already Signed Up? <a className="ll" href="login.js">Log In Here</a></p>
            </div>
            </div>
        )
    }
}
