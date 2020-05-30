import React,{Component} from 'react';


export default class FetchData extends Component {
    constructor(props) {
        super(props);
        
        this.state ={    

            loading : false,
            NumberOfDeathCases : null,
            NumberOfLocalTotalCases : null,
            NumberOfLocalNewCases : null,
            NumberOfLocalRecovered : null,
            NumberOfGlobalNewCases : null,
            NumberOfGlobalTotalCases : null,

            
            HospitalData : [],
          
        }
    }
  async componentDidMount(){

      const host = "http://hpb.health.gov.lk/api";
      const endpoint ="/get-current-statistical";
      //"http://hpb.health.gov.lk/api/get-current-statistical";
      const url =   host + endpoint;                                       
      const response = await fetch(url);
      const data = await response.json();
    
      this.setState({NumberOfDeathCases: data.data.local_deaths});
      this.setState({NumberOfLocalTotalCases: data.data.local_total_cases});
      this.setState({NumberOfLocalNewCases: data.data.local_new_cases});
      this.setState({NumberOfLocalRecovered : data.data.local_recovered});
      this.setState({NumberOfGlobalNewCases: data.data.global_new_cases});
      this.setState({NumberOfGlobalTotalCases: data.data.global_total_cases});

      this.setState({HospitalData : data.data.hospital_data})


     
      
      console.log(data);

  }
    


    render() { 
        return(
            <div>
        
              <div>Number of Local Death cases : {this.state.NumberOfDeathCases}</div>
              <div>Number of Local Total cases : {this.state.NumberOfLocalTotalCases}</div>
              <div>Number of Local new cases : {this.state.NumberOfLocalNewCases}</div>
              <div>Number of Local Recovered : {this.state.NumberOfLocalRecovered}</div>
              <div>Number of Global new cases : {this.state.NumberOfGlobalNewCases}</div>
              <div>Number of Global Total cases : {this.state.NumberOfGlobalTotalCases}</div>
              <br/>
              <div><h5>Hospitals in Srilanka :</h5> {this.state.HospitalData.map(count => <div>{count.hospital.name}</div>)}</div> 



            </div>

            
           
          
        );
    }
}
 
 