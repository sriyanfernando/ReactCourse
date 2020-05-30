import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

export default class CreateVehicle extends Component
{

    constructor(props)
    {
        super(props);

        this.onChangeVehicleName = this.onChangeVehicleName.bind(this);
        this.onChangeVehicleColor = this.onChangeVehicleColor.bind(this);
        this.onChangeVehicleNumber = this.onChangeVehicleNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // The state object is where you store property values that belongs to the component
        //we have to put here initial state
        this.state ={    

            name : '',
            color : '',
            number : ''
        }

    }

    onChangeVehicleName(e)
    {  
        //To change a value in the state object, use the this.setState() method.
        this.setState({name : e.target.value});
    }

    onChangeVehicleColor(e)
    {
        this.setState({color: e.target.value});
    }

    onChangeVehicleNumber(e)
    {
        this.setState({number : e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();

        const vehicleObject = {
            name : this.state.name,
            color : this.state.color,
            number : this.state.number
        };

        axios.post('http://localhost:4000/vehicles/create-vehicle',vehicleObject)
            .then(res => console.log(res.data));
          



        /*
        console.log('Vehicle Added');
        console.log(`Vehicle Name : ${this.state.name}`);
        console.log(`Vehicle Color : ${this.state.color}`);
        console.log(`Vehicle Number : ${this.state.number}`);
         */
        this.setState({name: '', color : '', number : ''});


    }

    
    
    // describe multi UI solutions //it is the method that actual outputs HTML to the DOM.
    //meka view weene kohomada kiyala browser ekata denne
   render() 
   {
       return(
        <div class ="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId ="Name">
                    <FormLabel>Name of the Vehicle : </FormLabel>
                    <FormControl type = "text" value ={this.state.name} onChange ={this.onChangeVehicleName}/>

                </Form.Group>

                <Form.Group controlId ="Color">
                    <FormLabel>Color of the Vehicle : </FormLabel>
                    <FormControl type = "text" value ={this.state.color} onChange ={this.onChangeVehicleColor}/>

                </Form.Group>

                <Form.Group controlId ="Number">
                    <FormLabel>Number of the Vehicle : </FormLabel>
                    <FormControl type = "text" value ={this.state.number} onChange ={this.onChangeVehicleNumber}/>

                </Form.Group>
                <Button variant = "info" size ="lg"  block ="" type = "submit"> Add Vehicle </Button>

               
            </Form>
           
       </div>

       );
   } 
}