import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container>
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <h1>Bem Vindo!</h1>
                        <h3>Faça sua autenticação:</h3>
                        <Row className="mt-5">
                            <Button block size="lg" type="submit" >
                                Scannear Biometria
                            </Button>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={6}>
                                <span>Não possui conta?</span>
                            </Col>
                            <Col xs={6}>
                                <Button href="#" variant="outline-primary" size="xs">Criar Cadastro</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </ThemeProvider>
    );
}