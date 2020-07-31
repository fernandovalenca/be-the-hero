import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../services/api';
import './styles.css'

import logoImg from '../../assests/logo.svg';
import heroesImg from '../../assests/heroes.png'

function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function Logon(event) {

        event.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Erro, ID nulo ou inexistente!')
        };
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={Logon}>
                    <h1>Faça seu Logon</h1>
                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value.toUpperCase())}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon;