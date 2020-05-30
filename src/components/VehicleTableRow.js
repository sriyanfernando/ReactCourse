import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class VehicleTableRow extends Component{

    constructor(props)
    {
        super(props);
        this.onDelete = this.onDelete.bind(this);

    }   

     
    onDelete(id){

        if(window.confirm("Are you sure you want to delete this item?"))
        {
    
            axios.delete('http://localhost:4000/vehicles/delete-vehicle:'+id)
            .then(res => console.log(res.data));

            console.log('this is:', this);
        }
      
    }
        
        render() 
        { 
            return (
                <tr>
                    <td>{this.props.obj.name}</td>                 
                    <td>{this.props.obj.color}</td>               
                    <td>{this.props.obj.number}</td>

                    <td>
                         {/*<Button  size="sm" variant ="info">Edit</Button>*/}

                        {/* <Link className = "edit-link" to={"/edit-vehicle" + this.props.obj._id}>Edit</Link>   */}
                       {/* <Button size="sm" variant ="danger">Delete</Button>*/}
                        <Link to={"/delete-vehicle/" + this.props.obj._id} className="btn btn-danger">Delete</Link> 
                      
                        <Button onClick={() => this.onDelete(this.props.obj._id)}>Test Delete</Button>
                    
                        <Link to={"/edit-vehicle/" + this.props.obj._id} className="btn btn-primary">Edit</Link> 
                    </td>

                </tr>

            )
        }
    
     
}