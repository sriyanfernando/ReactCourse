import React,{Component} from 'react';
import {register} from './UserFunctions';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert';

class Register extends Component {
   
    constructor(props){
        super(props);
        this.state={
            first_name :'',
            last_name :'',
            email: '',
            password: ''
        }
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChangeFirstName(e)
    {  
        //To change a value in the state object, use the this.setState() method.
        this.setState({first_name : e.target.value});
    }

    onChangeLastName(e)
    {  
        //To change a value in the state object, use the this.setState() method.
        this.setState({last_name : e.target.value});
    }

    onChangeEmail(e)
    {
        this.setState({email : e.target.value});
    }

    onChangePassword(e)
    {
        this.setState({password : e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        const user = {

            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email,
            password : this.state.password
            
        };
        
        prompt("Confirm")
        axios.post('http://localhost:4000/users/register',user)
        .then(res => {
            if(res){
                this.props.history.push('/login')
            }
        });

        /*
        register(user).then(res =>{
            if(res){
                this.props.history.push('/login')
            }
        })
       */

       this.setState({first_name: '', last_name : '', email : '',password : ''});
        
    }




    render() { 
        return (  
            <div class ="form-wrapper">
            <Form onSubmit={this.onSubmit}>

                <Form.Group controlId ="FirstName">
                    <FormLabel>First Name : </FormLabel>
                    <FormControl type = "text" value ={this.state.first_name} onChange ={this.onChangeFirstName}/>

                </Form.Group>

                <Form.Group controlId ="LastName">
                    <FormLabel>Last Name : </FormLabel>
                    <FormControl type = "text" value ={this.state.last_name} onChange ={this.onChangeLastName}/>

                </Form.Group>
                
                <Form.Group controlId ="Email">
                    <FormLabel>Email Address : </FormLabel>
                    <FormControl type = "email" value ={this.state.email} onChange ={this.onChangeEmail}/>

                </Form.Group>
 
                <Form.Group controlId ="Password">
                    <FormLabel>Password : </FormLabel>
                    <FormControl type = "password" value ={this.state.password} onChange ={this.onChangePassword}/>

                </Form.Group>

                
                <Button variant = "info" size ="lg"  block ="" type = "submit"> Register </Button>

               
            </Form>
           
       </div>

        );
    }
}
 
export default Register;