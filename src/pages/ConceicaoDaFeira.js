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
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1050527143&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-grande" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="  https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=65446945&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1504166093&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1063323562&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=924066801&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1107819402&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=200029022&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=170193839&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1504166093&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1686815061&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1497931915&amp;format=interactive"
          data-mobile-src=""></iframe>
        <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1796689824&amp;format=interactive"
          data-mobile-src=""></iframe>
      </div>
    </div>
  );
};

export default Municipios;
