import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'
// import Mainpage from './Mainpage';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestion : [],
            text : '',
            items : []
    
        };
    }

    // componentDidMount(){
    //     axios.get('https://api.foursquare.com/v2/venues/search')
    //     .then(response => {
    //         this.setState({
    //             suggestion : response.data
    //         })
    //     })
    //     .catch(error => console.log('ERROR 404 not found'))
    // }

    textChange = (event) => {
      const value =   event.target.value;
      let suggestion = [];
      if(value.length > 0){
          const regex = new RegExp(`^${value}`,'i');
          suggestion = this.state.items.sort().filter(v => regex.test(v));
      }
      this.setState(() => ({suggestion, text : value})); 
    }

    suggestionSelected(value){
        this.setState(() => ({
            text : value,
            suggestion : []
        }))
    }

    renderSuggestion(){
        const {suggestion} = this.state;
        if (suggestion.length === 0) {
            return null;
        }
        return( 
            <ul>
                {suggestion.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul> 
        );

    }

    render() {
        const {text} = this.state;
        return (
            <div className="all-headers">
                <h2 className = "app-name">KhaboKoi</h2>
                <Link to = "/login">
                <button className="login">LOG IN</button>
                </Link>
                <Link to = "/signup">
                <button className="signup">SIGN UP</button>
                </Link>
                </div>        
        
        )
    }
}
