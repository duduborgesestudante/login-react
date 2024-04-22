/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
   const navigate = useNavigate()
    const [novoUser, setNovoUser] = useState({
        username: '',
        password: ''
    });
   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovoUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8090/api', novoUser);
            setNovoLivro({
                username: '',
                password: ''
            });
            navigate("/")
        } catch (error) {
            console.error('Erro ao criar o Livro:', error);
        }
    };
   

    return (
        < div >
            <h1>Gerenciamento de Users</h1>
                    <>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={novoUser.username}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                value={novoUser.password}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Adicionar o Livro</button>
                        </form>
                    </>
        </div >
    );

}

export { Signin }
