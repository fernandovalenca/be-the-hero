import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../services/api';

import './styles.css'
import logoImg from '../../assests/logo.svg';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = ({
            name,
            email,
            whatsapp,
            city,
            uf,
        });


        try {
            const response = await api.post('ongs', data);

            alert(`seu ID: ${response.data.id}`)

            history.push('/');
        } catch (err) {
            alert('Eu ao criar cadastro, por favor tente novamente!')
        };
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Retornar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail" value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="button" >Cadastar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;