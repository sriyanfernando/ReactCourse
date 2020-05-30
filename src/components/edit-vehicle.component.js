import React,{Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

export default class EditVehicle extends Component
{
    constructor(props)
    {
        super(props);
        this.onChangeVehicleName= this.onChangeVehicleName.bind(this);
        this.onChangeVehicleColor= this.onChangeVehicleColor.bind(this);
        this.onChangeVehicleNumber= this.onChangeVehicleNumber.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state={
            name : '',
            color : '',
            number : ''
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/vehicles/edit-vehicle/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                name : response.data.name,
                color: response.data.color,
                number:response.data.number

            })
        })
        .catch(function(error){
            console.log(error);
        })
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

        axios.put('http://localhost:4000/vehicles/update-vehicle'+ this.props.match.params.id , vehicleObject)
            .then(res => console.log(res.data));
         
        this.props.history.push("/"); 

       
    }
    
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
                 <Button variant = "info" size ="lg"  block ="" type = "submit">  Edit Vehicle </Button>
 
                
             </Form>
            
        </div>
 
        );
    } 
   
}