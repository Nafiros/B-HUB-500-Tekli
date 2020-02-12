import React from 'react';
import logo from '../../logo-white.svg';
import './Footer.css';

function Footer() {
  return (
    <div id="footer">
      <div className="Footer">
        <div className="mainBlock">
          <div className="subBlock">
            <div className="blockTitle">
              <p>A propos de Tekli</p>
            </div>
            <p>
              Tekli est un projet d'étude.
              Tekli se positionne comme acteur de l'innovation et du developpement informatique.
              Et patati et patata.
              Encore du texte bidon.
              Blablabla blablabla blablablabla.
            </p>
          </div>
          <div className="subBlock">
            <div className="blockTitle">
              <p>Rester connecté</p>
            </div>
            <div className="blockList">
              <div className="blockListElemSocial">
                <a className="iconBackground socicon-discord discord" href="https://discord.gg/xpfBFXb"></a>
                <p>Rejoignez le serveur Discord</p>
              </div>
              <div className="blockListElemSocial">
                <i className="iconBackground socicon-facebook facebook"></i>
                <p>Suivez-nous sur Facebook</p>
              </div>
              <div className="blockListElemSocial">
                <i className="iconBackground socicon-linkedin linkedin"></i>
                <p>Suivez-nous sur LinkedIn</p>
              </div>
              <div className="blockListElemSocial">
                <i className="iconBackground socicon-twitter twitter"></i>
                <p>Suivez-nous sur Twitter</p>
              </div>
            </div>
          </div>
          <div className="subBlock">
            <div className="blockTitle">
              <p>Informations / Contact</p>
            </div>
            <div className="blockList">
              <div className="blockListElem">
                <i className="material-icons">email</i>
                <p>contact@tekli.fr</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="lowerFooterContainer">
            <div className="lowerFooterBox">
              <i className="material-icons copyrightIcon">copyright</i>
              <p className="footerText">
                2020 Tekli. All Rights reserved | Designed by
              </p>
              <img className="logo-footer" src={logo} alt="Logo de l'entité Tekli - Footer"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;