import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'

import heroesImg from '../../assets/heroes.png'
import logonImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

export default function Logon(){

    const [id, setId] = useState('')
    const history = useHistory()

    const handleLogin = async e =>{
        e.preventDefault()

        try {
            const response = await api.post('/sessions', {id})    
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')

        } catch (error) {
            alert('Erro em fazer o Login, tente novamente')
        }
        
    }

    return (
        <div className="logon-container">
           <section className='form'>
                <img src={logonImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu login</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}