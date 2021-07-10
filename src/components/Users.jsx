import React from 'react';
import { Container, Row, Button} from 'react-bootstrap';
import User from './User';


const Users = (props) => {
    return (
        <Container>
             <Button variant="dark" size="lg" disabled>
                   All Account Holders Details
                </Button>{' '}
             <hr/>
             
            <Row>
                {props.accountData.map((data) => {
                    return <User 
                    accountInfo = {data}
                     key={data.id}
                     transaction={props.transaction}
                     />
                } ) 
                
                }
            </Row>
        </Container>
    );
}

export default Users;
