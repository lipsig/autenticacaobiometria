import { useState } from 'react'
import axios from "axios";

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
        <div>
            <div className="field">
                <label className="label">name</label>
                <input
                    className="input"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </div>

            <div className="field">
                <button onClick={()=> capture()} className="button is-primary">cadasstrar</button>
            </div>

        </div>
    )
}

export default AddUser