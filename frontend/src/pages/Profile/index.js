import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import './styles.css';

export default function Profile(){
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>"Bem vindo, APAD"</span>
        <Link className = "button" to ="/incidents/new">Cadastrar novo casos</Link>
        <button type = "button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2  size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2  size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2  size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2  size={20} color="#a8a8b3"/>
          </button>
        </li>


      </ul>
    </div>
  )
}

