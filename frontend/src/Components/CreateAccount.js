import React, { useState } from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import AddUser from './AddUser';
import "./CreateAccount.css";

export default function CreateAccount() {
    
    const [email, setEmail] = useState("");

    function validateForm() {
        return email.length > 0 ;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container>
                <div className="CreateAccount">
             
                        <h3>Cadastrar nova conta:</h3>
                        <Row>
                             <AddUser />
                        </Row>
                   
                </div>
            </Container>
        </ThemeProvider>
    );
}