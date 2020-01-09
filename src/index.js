import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/Login';
import Signup from './component/Signup';
import Mainpage from "./component/Mainpage";
// import Mainpage from './component/Mainpage';
import {Route,BrowserRouter as Router} from '../node_modules/react-router-dom'
import * as serviceWorker from './serviceWorker';
import Popup from './component/Popup';

const myrouter = (
    <Router>
    <div>
      {/* <ul>
        <Link to="/">Home</Link>
        <Link to="/mainpage">Mainpage</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </ul> */}
  
        <Route exact path ="/" component={App}/>
        <Route path = "/login" component={Login} />
        <Route path = "/mainpage" component={Mainpage} />
        <Route path = "/signup" component={Signup} />
        <Route path = "/popup" component={Popup} />
    </div>
    </Router>
  ) 

ReactDOM.render(myrouter, document.getElementById('root'));
serviceWorker.unregister();

