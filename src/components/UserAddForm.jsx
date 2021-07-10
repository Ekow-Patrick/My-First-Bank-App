import React, { Component } from 'react';
import { Form, Button, Col, InputGroup, FormControl,Card, Accordion } from 'react-bootstrap';

class UserAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_name: "",
            account_type: "",
            branch: "",
            registration_fees: "500",
            amount_deposite: "",
            amount_withdraw: "",
            current_balance: "",
            contact: "",
            
        }
    };
    handleChange =(e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
            
        });
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        this.props.newClient(this.state);
        this.setState({
            account_name: "",
            account_type: "",
            branch: "",
            amount_deposite: "",
            amount_withdraw: "",
            current_balance: "",
            contact: "",
        })
        alert("Account Created Successfully")
    }
    render() {
        return (
            <div>
                <Button variant="primary" size="lg" disabled>
                    New Account Registration form
                </Button>{' '}
                                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <Form.Row>               
                        <Form.Row>
                            <Form.Label column lg={12} >Please indicate Account Type Below</Form.Label>                            
                                <select  name="account_type" value={this.state.account_type} onChange={this.handleChange}  >
                                    <option value="Select Account Type Here"> Select Account Type Here</option>
                                    <option value="CURRENT A/C"> CURRENT </option>                                 
                                    <option value="SAVINGS A/C"> SAVINGS </option>
                                    <option value="JOINT A/C"> JOINT</option>                                   
                                </select>       
                        </Form.Row><br/>
                        <Form.Row>
                            <Form.Label>Account Name</Form.Label>
                            <Col xs={12}>
                                <Form.Control placeholder="Full Name" name="account_name" value={this.state.account_name} onChange={this.handleChange} required />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Branch Name</Form.Label>
                            <Col xs={12}>
                                <Form.Control placeholder="Add Branch Name here" name="branch" value={this.state.branch} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Contact Number</Form.Label>
                            <Col xs={12}>
                                <Form.Control type="number" placeholder="Add Contact Number here" name="contact" value={this.state.contact} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Amount To Deposite GH¢:</Form.Label>
                            
                            <Col xs={12}>                             
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>GH¢</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Amount (to the nearest dollar)" name="amount_deposite" value={this.state.amount_deposite} onChange={this.handleChange} />
                                    <InputGroup.Append>
                                        <InputGroup.Text>.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Accordion>
                                <Card>
                                    
                                        <Accordion.Toggle as={Button} variant="outline-danger" eventKey="0">
                                            Click Here to Read Our Policies and Terms
                                        </Accordion.Toggle>
                                   
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Your Account will be Credited with GH¢ 500.00 as a minimum account Balance Plus any Deposite Amount made Upon completeing this Registration Form </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion>
                        </Form.Row>
                       
                    </Form.Row><br/>
                     <Button type="submit" variant="outline-success" size="lg" block>
                        Submit Form
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UserAddForm;
