import React, { Component } from 'react'
import './Movierow.css'
export default class Movierow extends Component {

    onView = () => {
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href = url
    }

    render() {
        return (
            // <table key={this.props.movie.id}>
            // <tbody>
            //     <tr>
            //         <td>
            //         <img alt="poster" src={this.props.movie.poster_src} height="120px" width="120px"/>
            //         </td>
            //         <td>
            //         <div>
            //         <div className="movieTitle">
            //             {this.props.movie.title}
                        
            //         </div>    
            //         <div className="movieOverview"> 
            //           Popularity :  {this.props.movie.popularity}
            //         </div>
            //         <button onClick={this.onView.bind(this)}>View</button>
            //         <button style={{backgroundColor : "green",color : "white"}}>Play</button>
            //         </div>     
            //         </td> <img alt="poster" style={{textAlign:"center"}} src={this.props.movie.poster_src} height="200px" width="200px"/>
            //                 </tr>
            //                     </tbody>
            //                             </table>
            <div className="view" >
            
            <div className="movieTitle">
                    <p>oaooo</p>
            </div>    
            <div className="movieOverview" > 
                    Location :  {this.movie.location.crossStreet}
            </div>
            <div className="movieOverview"> 
            POSTAL_CODE :  {this.movie.location.crossStreet}
            </div>
            <button className="btn" onClick={this.onView.bind(this)}>View</button>
            </div>
            
        )
    }
}
