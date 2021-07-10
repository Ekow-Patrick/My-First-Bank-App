import React, { Component } from 'react';
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

class UserEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_name: props.accountInfo.account_name,
            account_type: props.accountInfo.account_type,
            branch: props.accountInfo.branch,
            registration_fees:props.accountInfo.registration_fees,
            amount_deposite:"",
            amount_withdraw:props.accountInfo.amount_withdraw,
            current_balance: props.accountInfo.current_balance,
            contact: props.accountInfo.contact,
            id:props.accountInfo.id
            
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
        this.props.transaction(this.state.id, this.state);
        this.setState({
            account_name: "",
            account_type: "",
            branch: "",
            amount_deposite: "",
            amount_withdraw: "",
            current_balance: "",
            contact: "",
        })
        alert("Transaction done Successfully. Please proceed to print-out receipt. Thank you")
        this.props.closeModal();
    }
    render() {
        return (
            <div>
              
                <Form onSubmit={this.handleSubmit} >
                    <Form.Row>               
                        
                        <Form.Row>
                            <Form.Label>Account Name</Form.Label>
                            <Col xs={12}>
                                <Form.Control placeholder="Full Name" name="account_name" value={this.state.account_name} onChange={this.handleChange} disabled />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Branch Name</Form.Label>
                            <Col xs={12}>
                                <Form.Control placeholder="Add Branch Name here" name="branch" value={this.state.branch} onChange={this.handleChange} disabled  />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Contact Number</Form.Label>
                            <Col xs={12}>
                                <Form.Control type="number" placeholder="Add Contact Number here" name="contact" value={this.state.contact} onChange={this.handleChange} disabled  />
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
                        </Form.Row>
                        <Form.Row>
                            <Form.Label column lg={6}>Amount To Withdraw GH¢:</Form.Label>
                            
                            <Col xs={12}>                             
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>GH¢</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Amount (to the nearest dollar)" name="amount_withdraw" value={this.state.amount_withdraw} onChange={this.handleChange} />
                                    <InputGroup.Append>
                                        <InputGroup.Text>.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>                         
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

export default UserEditForm;
