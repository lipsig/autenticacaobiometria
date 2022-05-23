import { useState, useEffect } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';

const Login = () => {


    const [users, setuser] = useState([]);
    console.log(typeof(users));
    console.log(users)
    const navigate = useNavigate();


    const getusers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setuser(response.data);
    }
    


    const Match = async () => {
        if(users !== []){
        await axios.get('http://localhost:9000/api/public/v1/captura/Identificar?jsonArray='+ JSON.stringify(users) ).
            then((data) => {
                if (data.ID !== "0" && data.ID !== 0) {
                    console.log(data);
                    alert("Digital encontrada com sucesso!");                    
                    alert("Seja bem vindo "+ users.filter(el => el.title === data.ID)[0].name +" !");                   
                    alert("Você está autorizado");
                }
                else {
                    alert("Digital não pode ser autenticada! Por favor, Faça o seu cadastro de biometria!");
                }
            })
        }
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container>
                <div className="Login">
                    <Form>
                        <h1>Bem Vindo!</h1>
                        <h3>Faça sua autenticação:</h3>
                        <Row className="mt-5">
                            <Button size="lg" onClick={() => Match()} >
                                Scannear Biometria
                            </Button>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={6}>
                                <span>Não possui conta?</span>
                            </Col>
                            <Col xs={6}>
                                <Button href="/create" variant="outline-primary" size="xs">Criar Cadastro</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Login