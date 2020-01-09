import React, { Component } from 'react'
import './Body.css'
import {Link} from 'react-router-dom'
import './Mainpage.css'
import './Movierow.css'
import $ from 'jquery'
import Popup from './Popup'
const logo = require('../image3.jpg')
// const Movie_Data_URL = "https://api.themoviedb.org/3/search/movie?api_key=a010b9cd32d11e682c0c59e61a64909b&query=";
// const API_KEY = "https://api.foursquare.com/v2/venues/search?client_id=5ZV4F20IBC33HHL0Q0KJHMEX3QJZHOZ3VVMXE1RLJGJBUEXO&client_secret=034KBWA1SRSXAAKDZWBQLGEYCGEX2VOAF21XNRUBSP5A5SB3&v=20191228&limit=500&near=Dhaka,Dhaka&section=food"


export default class Body extends Component {

constructor(props) {
            super(props)
            this.state = {
                rows : [],
                isHidden : false,
                showPopup : 2
              }
              this.toggleContent = this.toggleContent.bind(this);          

    this.performSearch('')         
        }   
        
        toggleContent = (event) => {
            event.preventDefault();
            this.setState((currentState) => ({
               isHidden : !currentState.isHidden 
            }));
        }
    

performSearch(searchTerm){
    $.ajax({
        url : `https://api.foursquare.com/v2/venues/search?client_id=5ZV4F20IBC33HHL0Q0KJHMEX3QJZHOZ3VVMXE1RLJGJBUEXO&client_secret=034KBWA1SRSXAAKDZWBQLGEYCGEX2VOAF21XNRUBSP5A5SB3&v=20191230&limit=100&query=restaurant&near=${searchTerm},Dhaka`,
        success : (searchResult) => {
             console.log('Data Asice')
             const result = searchResult.response.venues;
             console.log(result)
             let myRows = [];
             result.forEach(element => {
            const movieRow = ( 
                <div key={element.id} className="view" >    
                <img alt="poster" src={logo} height="200" width="395"></img>
                <div key={element.id} className="movieTitle">
                        <p key={element.id}>{element.name}</p>
                </div>    
                <Link to={{pathname: '/popup', state: {nam : element.name, address : element.location.address, city : element.location.city, state : element.location.state, country : element.location.country }}}>
                <button className="btn">VIEW</button>
                </Link>
                
                </div>
            )
            
             myRows.push(movieRow)
             });

            this.setState(() => ({
                rows : myRows
            }))
        },
        error : () => {
            console.log("Asenai")
        }

    })
}

searchHandler(event){
const val = event.target.value;
const boundObject = this;
boundObject.performSearch(val)
}



render() {
    // const showContent= true;
    return (
         <div className="body-element">

             <input className="input-field" placeholder="Enter Location" onChange={this.searchHandler.bind(this)} ></input>
             <div>
             {this.state.rows}
             </div>
             <footer>
                 <h3>Developed By : Mursalin Araf</h3>
             </footer>
         </div>
     )
 }
}
















// {this.state.isHidden === true ? <div className="logsign">
//             <Link to = '/login'>
//             <button className="login">Login</button>
//             </Link>
//             <div>
//             <Link to = '/signup'>
//             <button className="signup">signup</button>
//             </Link>
//             </div>
//             </div> : ""}









// import React, { Component } from 'react'
// import './Body.css'
// import {Link} from 'react-router-dom'
// export default class Body extends Component {

//     constructor(props){
//         super(props);
//         this.toggleContent = this.toggleContent.bind(this);

//         this.state = {
//             isHidden : false,
//         }
//     }

//     toggleContent = (event) => {
//         event.preventDefault();
//         this.setState((currentState) => ({
//            isHidden : !currentState.isHidden 
//         }));
//     }

//     render() {
//         const showContent= true;
//         return (
//             <div className= "body-element">
//             <button className="toggle" onClick={this.toggleContent}>+</button>
//             {this.state.isHidden === true ? <div className="logsign">
//             <Link to = '/login'>
//             <button className="login">Login</button>
//             </Link>
//             <div>
//             <Link to = '/signup'>
//             <button className="signup">signup</button>
//             </Link>
//             </div>
//             </div> : ""}
//                 <div className="body-layer">
//                 <Link to = '/mainpage'>
//                 <button className="get-btn">GET STARTED</button>
//                 </Link>
//                 <p className="call">For Any Query Dial : 01758585137 </p>
//                 </div>
//             </div>
//         )
//     }
// }
