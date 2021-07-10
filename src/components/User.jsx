import React, { useState } from 'react';
import { Card, Col, Button, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import UserEditForm from './UserEditForm';


const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Account Type: {props.accountInfo.account_type} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Account Balanace:{props.accountInfo.current_balance} </h4>
                   <UserEditForm accountInfo={props.accountInfo} transaction={props.transaction} closeModal={handleClose} />
                </Modal.Body>
                
            </Modal>
           

            <Col>
                <Card border="success" style={{ width: '22rem', margingBottom:'2rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Account Type: {props.accountInfo.account_type} <hr/></Card.Title>
                        <Card.Text>
                            <p>Account Name: {props.accountInfo.account_name}</p>
                            <p>Account Number: {props.accountInfo.id}</p>
                            <p>Branch: {props.accountInfo.branch}</p>
                            <p>Contact Number: {props.accountInfo.contact}</p>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <span>
                                Current Account Balance: <b>{(+props.accountInfo.registration_fees) + (+props.accountInfo.amount_deposite) - (props.accountInfo.amount_withdraw)}</b>
                                </span></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#"><Button onClick={handleShow} >Make Transaction</Button></Card.Link>
                        <Card.Link href="#"><Button variant="danger" onClick={handleShow} >Close Account</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default User;
