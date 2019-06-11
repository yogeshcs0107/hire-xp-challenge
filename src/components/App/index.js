import React from 'react';

import './App.css';
import NavBar from '../NavBar';
import Home from '../Home';


const App = () =>{
    return(
        <div>
            <div className="row container-fluid">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <NavBar/>
                </div>
                <div className="col-md-6">
                    <Home/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default App;