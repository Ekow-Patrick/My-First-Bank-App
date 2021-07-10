import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserAddForm from './components/UserAddForm';
import Users from './components/Users';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data :[
        {
          account_name:"Ekow-Patrick",
          account_type: "CURRENT",
          branch:"Cape Coast",
          registration_fees: "500",
          amount_deposite: "",
          amount_withdraw:"",
          current_balance: "",
          contact:"0244587963",
          id: "NKGDB1234"
        }
        
      ]
    }

  }
   AddNewClient =(client) =>{
  client.id= Math.random().toString()
  this.setState({
   data:[...this.state.data,client]
   })
  
  }

  //Transaction
  transaction = (id, updatedaccount) =>{
    this.setState({
      data:this.state.data.map(client=>client.id===id ? updatedaccount : client)
    })

  }
  render(){
  return (
    <>
    <Container fluid style={{marginTop:'2rem'}}>
      <Row>
        <Col md="3">
         <UserAddForm newClient={this.AddNewClient} />
        </Col>
        <Col>
         <Users accountData= {this.state.data} transaction={this.transaction} />
        </Col>
      </Row>
    </Container>
      
    </>
  );
}
}

export default App;
