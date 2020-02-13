import React from 'react';
import './SubBlock.css';

function SubBlock(props) {
    if (props.title === "A propos de Tekli") {
        return (
            <div className="subBlock">
                <div className="blockTitle">
                    <p>{props.title}</p>
                </div>
                <p>
                    Tekli est un projet d'étude.
                    Tekli se positionne comme acteur de l'innovation et du developpement informatique.
                    Et patati et patata.
                    Encore du texte bidon.
                    Blablabla blablabla blablablabla.
                </p>
            </div>
        );
    } else if (props.title === "Rester connecté") {
        return (
            <div className="subBlock">
                <div className="blockTitle">
                    <p>{props.title}</p>
                </div>
                <div className="blockListSocial">
                    <div className="blockListElemSocial">
                        <i className="iconBackground socicon-discord"></i>
                    </div>
                    <div className="blockListElemSocial">
                        <i className="iconBackground socicon-facebook"></i>
                    </div>
                    <div className="blockListElemSocial">
                        <i className="iconBackground socicon-linkedin"></i>
                    </div>
                    <div className="blockListElemSocial">
                        <i className="iconBackground socicon-twitter"></i>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="subBlock">
                <div className="blockTitle">
                    <p>{props.title}</p>
                </div>
                <div className="blockList">
                    <div className="blockListElem">
                        <i className="material-icons icon-email">email</i>
                        <p>contact@tekli.fr</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubBlock;