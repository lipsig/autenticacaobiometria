import { useState, useEffect } from 'react'
import axios from "axios";
import AddUser from './AddUser';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const UserList = () => {
    const [users, setuser] = useState([]);

    useEffect(() => {
        getusers();
    }, []);

    const getusers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setuser(response.data);
    }

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container>
                <Row className="justify-content-md-center">
                    <h2 className="mt-5">Contas Cadastradas:</h2>
                        <Row className="mt-5"> 
                        <Table responsive bordered hover style={{ tableLayout: 'fixed' }}>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Nome Usuario</th>
                                    <th>FingerPrint Digital</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td style={{ fontSize: "12px", wordWrap: 'break-word' }}><span>{user.template}</span></td>
                                        {/*
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteuser(user.id) } className="button is-small is-danger">Delete</button>
                            </td>*/}
                                    </tr>
                                ))}

                            </tbody>
                        </Table >
                        </Row>
                </Row>
            </Container>
        </ThemeProvider>
    )
}

export default UserList