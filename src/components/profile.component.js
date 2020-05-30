import React,{Component} from 'react';
import jwt_decode from 'jwt-decode';

export default class Profile extends Component {
    
    constructor()
    {
        super()
        this.state ={
            first_name : '',
            last_name : '',
            email : ''
        }     
    }

    async componentDidMount()
    {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name : decoded.first_name,
            last_name : decoded.last_name,
            email : decoded.email
        })

    }


    render() { 
        return (  
          <div className ="container">
               <table className="tableClass">
                   <h2>
                      <tbody>
                          <tr>
                              <td>First Name</td>
                              <td>{this.state.first_name}</td>
                          </tr>
                          <tr>
                              <td>Last Name</td>
                              <td>{this.state.last_name}</td>
                          </tr>
                          <tr>
                              <td>Email</td>
                              <td>{this.state.email}</td>
                          </tr>
                      </tbody>
                    
                    </h2>
               </table>


          </div>

        );
    }
}
 
