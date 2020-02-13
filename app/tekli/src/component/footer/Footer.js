import React from 'react';
import logo from '../../logo-white.svg';
import './Footer.css';
import SubBlock from './subBlock/SubBlock';

function Footer() {
    return (
        <div id="footer">
            <div className="Footer">
                <div className="mainBlock">
                    <SubBlock title="A propos de Tekli" />
                    <SubBlock title="Rester connecté" />
                    <SubBlock title="Informations / Contact" />
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