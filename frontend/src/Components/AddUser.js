import { useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
    const [name, setname] = useState('');
    const navigate = useNavigate();

    const capture = async () => {
        await axios.get('http://localhost:9000/api/public/v1/captura/Capturar/1').then((data) => {
            if (data.data !== "" && data.data !== null) {
                console.log(data.data);
                saveUser(name, data);
            }
            else {
                alert("Digital não pode ser capturada!");
            }
        })
    }

    const saveUser = async (name, data) => {
        if (data.data !== null) {
            await axios.post('http://localhost:5000/users', {
                name: name,
                template: data.data
            }).then(()=>{
                alert(name + "sua digital foi cadastrada com sucesso!")
                navigate("/");
            });
        }
        else {
            console.log('null');
        }
    }

    return (
        <Row className="mt-5">
            <Col xs={12} className="flex justify-content-md-start">      
                    <Form.Label>Insira um email de Recuperação:</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                        <FormControl
                            type="email" placeholder="Inserir Email"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </InputGroup>
            </Col>
            <Col xs={12} className="flex justify-content-md-end">
                <Button style={{ width: "100%" }}  size="lg" type="submit" onClick={() => capture() } className="button is-primary">Capturar Biometria Digital</Button>
            </Col>       
        </Row >

    )
}

export default AddUser