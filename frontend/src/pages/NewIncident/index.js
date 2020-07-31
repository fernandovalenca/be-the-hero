import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../services/api';

import logoImg from '../../assests/logo.svg';

import './styles.css';

function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('Erro ao tentar cadastrar novo caso, tente novamente!')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreve o caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        type="text"
                        placeholder="Título do caso"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Valor em reais"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button type="submit" className="button" >Cadastar</button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;