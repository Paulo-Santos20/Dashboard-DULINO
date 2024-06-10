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
      <div className='Banner'>
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
      <div className='grafico'>
      <iframe width="40%" height="350" class="chart-iframe" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"></iframe>
      <iframe width="40%" height="350" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1504166093&amp;format=interactive"></iframe>
      <iframe width="40%" height="315" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"></iframe>

      </div>
    </div>
  );
}

export default Municipios;