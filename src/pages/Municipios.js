import React from 'react';
import "./style.css";

const Municipios = () => {
  return (
    <div className="municipios-page"> {/* Adicione uma classe para a página Municípios */}
      <h2>Municípios</h2>
      <iframe width="25%" height="300" class="chart-iframe" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"></iframe>
      
      
    </div>
  );
};

export default Municipios;
