import React, { Component } from 'react'
import './Mainpage.css'
// import $ from 'jquery'
const logo = require('../image3.jpg')
// const Movie_Data_URL = "https://api.themoviedb.org/3/search/movie?api_key=a010b9cd32d11e682c0c59e61a64909b&query=";
// const API_KEY = "https://api.foursquare.com/v2/venues/search?client_id=5ZV4F20IBC33HHL0Q0KJHMEX3QJZHOZ3VVMXE1RLJGJBUEXO&client_secret=034KBWA1SRSXAAKDZWBQLGEYCGEX2VOAF21XNRUBSP5A5SB3&v=20191228&limit=500&near=Dhaka,Dhaka&section=food"


export default class Mainpage extends Component {


}






















    // constructor(props) {
//             super(props)
//             this.state = {
//                 rows : [],
//               }

//     this.performSearch('')          
//         }        

// performSearch(searchTerm){
//     $.ajax({
//         url : `https://api.foursquare.com/v2/venues/search?client_id=5ZV4F20IBC33HHL0Q0KJHMEX3QJZHOZ3VVMXE1RLJGJBUEXO&client_secret=034KBWA1SRSXAAKDZWBQLGEYCGEX2VOAF21XNRUBSP5A5SB3&v=20191230&limit=100&query=restaurant&near=${searchTerm},Bangladesh`,
//         success : (searchResult) => {
//              console.log('fetched Data')
//              const result = searchResult.response.venues;
//              console.log(result)
//              let myRows = [];
//              result.forEach(element => {
//             const movieRow = ( 
//                 <div className="view" >    
//                 <img alt="poster" src={logo} height="250" width="280"></img>
//                 <div className="movieTitle">
//                         <p>{element.name}</p>
//                 </div> 
//                 <div>
//                 <button className="btn">VIEW</button>
//                 </div>
//                 </div>
//             )
            
//              myRows.push(movieRow)
//              });

//             this.setState(() => ({
//                 rows : myRows
//             }))
//         },
//         error : (xhr,status,err) => {
//             console.log("failed shit")
//         }

//     })
// }

// searchHandler(event){
// const val = event.target.value;
// const boundObject = this;
// boundObject.performSearch(val)
// }



// render() {
//     return (
//          <div className="list">
//              <input className="input-field" placeholder="Enter Location" onChange={this.searchHandler.bind(this)} ></input>
//              <div>
//              {this.state.rows}
//              </div>
//              <footer>
//                  <h3>Developed By : Mursalin Araf</h3>
//              </footer>
//          </div>
//      )
//  }
// }


//         componentDidMount(){
//             this.getLocation();
//         }
    
//         getLocation = () =>{
//             navigator.geolocation.getCurrentPosition(response =>{
//                 this.setState({ latlong : 23.6850 + "," + 90.3563},
//                 () => {this.getVenues()})
//             });
//         }
    
//         getVenues =() => {
//             const endPoint = "https://api.foursquare.com/v2/venues/search?client_id=5ZV4F20IBC33HHL0Q0KJHMEX3QJZHOZ3VVMXE1RLJGJBUEXO&client_secret=034KBWA1SRSXAAKDZWBQLGEYCGEX2VOAF21XNRUBSP5A5SB3&v=20191228&limit=500&near=Dhaka,Dhaka&section=food"
//             axios.get(endPoint).then(response => {
//                 console.log(response)
//                 this.setState(() => ({
//                   name : response.data.venues[0].location.crossStreet,
//                   location : response.data.venues[0].location.crossStreet,
//                 }))

//     })

//     console.log(this.state.name)
    
// }



//  constructor(props) {
    // <img src="https://ss3.4sqi.net/img/categories_v2/food/fastfood_100.png"></img>
//      super(props)
//      this.state = {rows : []} 

//     //  let movies = [
//     //      {id : 0 , poster_src : "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg", title : "Avengers  Infity War", overview : "this is the best movie of all" },
//     //      {id : 1 , poster_src : "https://cdn.pinkvilla.com/files/styles/contentpreview/public/Avengers%20Endgame%20Leaked%20images%20show%20that%20Iron%20Man%20will%20be%20seen%20in%20SEVERAL%20suits%20%282%29.jpg?itok=VfV8OJUa" ,title : "Iron Man", overview : "this is the 1st movie of Marvel Series" }
//     //  ]
 
//     //  const movieRows = [];


//     //  movies.forEach(movie => {
//     //     const movieRow = <Movierow movie={movie}/> 

//     //      movieRows.push(movieRow)
//     //  })

//     //  this.state = {rows : movieRows}
//     this.performSearch('all');
        
//  }

// performSearch(searchTerm){
//         $.ajax({
//             url : Movie_Data_URL + searchTerm,
//             success : (searchResult) => {
//                 console.log('fetched Data')
//                 const result = searchResult.results
//                 let myRows = [];
//                 result.forEach(element => {
//                     element.poster_src = "https://image.tmdb.org/t/p/w185/"+ element.poster_path
//                     const movieRow = <Movierow movie={element}/>
//                     myRows.push(movieRow)
//                 });

//                 this.setState(() => ({
//                     rows : myRows
//                 }))
//                 console.log(this.state.rows)
//             },
//             error : (xhr,status,err) => {
//                 console.log("failed shit")
//             }

//         })
// }

// searchHandler(event){
//     const val = event.target.value;
//     const boundObject = this;
//     boundObject.performSearch(val)
// }
