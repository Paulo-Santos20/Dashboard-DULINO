import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import "./style.css";

const Municipios = () => {
  useEffect(() => {
    const adjustIframeSrc = () => {
      const iframes = document.querySelectorAll('.iframe-grande, .iframe-pequeno');
      if (window.innerWidth <= 768) {
        iframes.forEach((iframe) => {
          const mobileSrc = iframe.getAttribute('data-mobile-src');
          if (mobileSrc) {
            iframe.setAttribute('src', mobileSrc);
          }
        });
      }
    };

    window.addEventListener('resize', adjustIframeSrc);
    window.addEventListener('load', adjustIframeSrc);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', adjustIframeSrc);
      window.removeEventListener('load', adjustIframeSrc);
    };
  }, []);

  return (   
      <div className="grafico">
        <div className="iframe-container">
          <iframe className="iframe-grande" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"
            data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=675843512&amp;format=interactive"></iframe>
          <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1504166093&amp;format=interactive"
            data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1886583363&amp;format=interactive"></iframe>
          <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"
            data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=675843512&amp;format=interactive"></iframe>
        </div>
      </div>    
  );
};

export default Municipios;
