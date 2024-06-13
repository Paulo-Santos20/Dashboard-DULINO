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
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1873823742&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1947298079&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1570731380&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=660187022&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1278976191&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=649195103&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1951444820&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=556010073&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1794025572&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1148362772&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1391297528&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=271155423&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1982078972&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=750079638&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1127115521&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=534894020&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1337004162&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=247392757&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1072528952&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1684103005&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1135630044&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=131770455&amp;format=interactive"></iframe>
      <iframe className="iframe-pequeno" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=864090454&amp;format=interactive"
          data-mobile-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFnRNk-krJz-U0AMu2IvgxAic6jcQEWh6LtM_rhGyAFzw_mi4niFMHyl9MYB2HbFkRL2mdftTicVAg/pubchart?oid=1641539597&amp;format=interactive"></iframe>
      </div>
    </div>
  );
};

export default Municipios;
