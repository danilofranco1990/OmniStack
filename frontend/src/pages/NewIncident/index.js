import React from 'react';
import {FiArrowLeft} from 'react-icons/fi'
//import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NewIncident(){
  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
       <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva seu caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className = "back-link"to="/profile">
          <FiArrowLeft size={16} color="#e02041"/>
          Voltar para home
          </Link>
      </section>
        <form>
          <input placeholder="Título do caso"/>
          <textarea  placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <button className="button" type = "submit">Cadastrar</button>
        </form>    
    </div>
  </div>
    )
}