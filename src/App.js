import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {BrowserRouter as Router, Switch ,Route , Link} from 'react-router-dom';

import CreateVehicle from './components/create-vehicle.component';
import EditVehicle from './components/edit-vehicle.component';
import VehicleList from './components/vehicle-list.component';
import Button from 'react-bootstrap/Button';

import Registration  from './components/Registration.component';
import Login from './components/login.component';
import Profile from './components/profile.component';

import Corona from './components/viewCorona.component';


class App extends Component
{
     render()
     {
        return(

          <Router>
               <div className ="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/index'} className = "navbar-brand">LKSTORE</Link>

                    <div className = "collapse navbar-collapse" id = "navbarSupportedContent">

                      <ul className = "navbar-nav mr-auto">

                        <li className = "nav-item">
                            <Link to={'/index'} className = "navbar-link">Home</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/create-vehicle'} className = "navbar-link">Create</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/edit-vehicle/:id'} className = "navbar-link">Edit</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/vehicle-list'} className = "navbar-link">List</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/register'} className = "navbar-link">Registration</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to={'/login'} className = "navbar-link">Login</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/profile'} className = "navbar-link">Profile</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to={'/corona'} className = "navbar-link">Corona Dashboard</Link>
                        </li>

                      </ul>

                    </div>

                  </nav>
                  <br/>

                  

                  <Switch>
                    
                    <Route exact path="/create-vehicle" component ={CreateVehicle}/>
                    <Route exact path="/edit-vehicle/:id" component ={EditVehicle}/>
                    <Route exact path="/vehicle-list" component ={VehicleList}/>
                    <Route exact path="/register" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/corona" component={Corona}/>
                    
                  </Switch>
               </div>

          </Router>
        );
     }
}
export default App;
