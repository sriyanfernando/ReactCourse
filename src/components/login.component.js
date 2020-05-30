import React,{Component} from 'react';
import {login} from './UserFunctions';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';


class Login extends Component {
   
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChangeEmail(e)
    {  
        //To change a value in the state object, use the this.setState() method.
        this.setState({email : e.target.value});
    }

    onChangePassword(e)
    {
        //To change a value in the state object, use the this.setState() method.
        this.setState({password : e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        const user = {
            email : this.state.email,
            password : this.state.password
            
        }
        axios.post('http://localhost:4000/users/login',user)
        .then(res => {
            if(res){             
                this.props.history.push('/home')
            }
        });

        /*
        login(user).then(res =>{
            if(res){
                this.props.history.push('/profile')
            }
        })
        */
    }

    render() { 
        return (  
            <div class ="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                
                <Form.Group controlId ="Email">
                    <FormLabel>Email Address : </FormLabel>
                    <FormControl type = "text" value ={this.state.email} onChange ={this.onChangeEmail}/>

                </Form.Group>
 
                <Form.Group controlId ="Password">
                    <FormLabel>Password : </FormLabel>
                    <FormControl type = "text" value ={this.state.password} onChange ={this.onChangePassword}/>

                </Form.Group>

                
                <Button variant = "info" size ="lg"  block ="" type = "submit"> Sign In </Button>

               
            </Form>
           
       </div>

        );
    }
}
 
export default Login;