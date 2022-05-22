import { useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import InputGroup  from 'react-bootstrap/InputGroup';
import FormControl  from 'react-bootstrap/FormControl';


const AddUser = () => {
    const [name, setname] = useState('');

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
        if(data.data !== null){
        await axios.post('http://localhost:5000/users', {
            name: name,
            template: data.data
        });
        }   
        else{
            console.log('null');
        }
    }

    return (
        <Row className="mt-5">
        <Col xs={6}  className="flex justify-content-md-start">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </InputGroup>       
            </Col>
            <Col xs={6} className="flex justify-content-md-end">
                <Button onClick={()=> capture()} className="button is-primary">cadasstrar</Button>
           </Col>

        </Row>
    )
}

export default AddUser