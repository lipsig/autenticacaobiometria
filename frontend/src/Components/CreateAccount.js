import React, { useState } from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
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
                    <Form onSubmit={handleSubmit}>
                        <h3>Cadastrar nova conta:</h3>
                        <Row className="mt-5">
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Insira um email de Recuperação:</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mt-5">
                            <Button block size="lg" type="submit" >
                                Capturar Biometria Digital
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Container>
        </ThemeProvider>
    );
}