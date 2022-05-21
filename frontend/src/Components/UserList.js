import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
    const [users, setuser] = useState([]);
 
    useEffect(() => {
        getusers();
    }, []);
 
    const getusers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setuser(response.data);
    }
 
    const deleteuser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getusers();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>name</th>
                        <th>template</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ index + 1 }</td>
                            <td>{ user.name }</td>
                            <td>{ user.template }</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteuser(user.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default UserList