import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import coracao from "../images/coracaodemaria.jpg";
import conceicao from "../images/conceicaodafeira.jpg";
import feira from "../images/prefeiturafeira.png";
import taboao from "../images/taboaodaserra.png";

const Municipios = () => {
  return (
    <div className="municipios-page">
      <h1>Municípios</h1>
      <Link to="/coracao-de-maria" className="municipio-link">
        <img src={coracao} alt="Coração de Maria" className="municipio-image" />
      </Link>
      <Link to="/conceicao-da-feira" className="municipio-link">
        <img src={conceicao} alt="Conceição da Feira" className="municipio-image" />
      </Link>
      <Link to="/taboao-da-serra" className="municipio-link">
        <img src={taboao} alt="Taboão da Serra" className="municipio-image" />
      </Link>
      <Link to="/feira-de-santana" className="municipio-link">
        <img src={feira} alt="Feira de Santana" className="municipio-image" />
      </Link>
    </div>
  );
};

export default Municipios;
