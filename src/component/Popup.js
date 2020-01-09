import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import './Popup.css'

class Popup extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showNam : '',
       showAddress : '',
       showState : '',
       showCity : ''
    }

  }
  
  

  render() {
    
    const {nam} = this.props.location.state
    const {address} = this.props.location.state
    const {city} = this.props.location.state
    const {state} = this.props.location.state
    const {country} = this.props.location.state

    // this.setState({
    //   showNam : this.nam,
    //    showAddress : this.address,
    //     showCity : this.city,
    //      showState : this.state
    // })

    //  if () {
       
    //  }

    return (
      <div >
      <header className="login-header-div">
                <Link to = '/'>
                    <h2 className="login-header">KhaboKoi</h2>
                    </Link>
                </header>
      <div className="login-form" id="details" style={{textAlign : 'center center'}}>
      <h2> Restaurant Name :  {nam} </h2>
      <p> Location : {address} </p>
      <p> Area : {city} </p>
      <p> State : {state} </p>
      <p> Country : {country} </p>
      <Link to='/'>
        <button className="get-btn">Back To Home</button>
        </Link>
      </div>
      </div>

    );
  }
}


export default Popup;