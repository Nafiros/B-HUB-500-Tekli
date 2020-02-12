import React from 'react';
import logo from '../../logo.svg';
import './Header.css';


class Header extends React.Component {
    componentDidMount() { window.addEventListener('scroll', this.handleScroll, true); }
    componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll); }

    handleScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("headerRoot").style.height = "80px";
        document.getElementById("icon-down-scroll").style.display = "none";
        document.getElementById("index-header-logo").style.height = "70px";
      } else {
        document.getElementById("headerRoot").style.height = "100vh";
        document.getElementById("icon-down-scroll").style.display = "flex";
        document.getElementById("index-header-logo").style.height = "300px";
      }
    }

    render() {
        return (
            <div id="headerRoot" onScroll={this.handleScroll}>
                <div className="Header">
                    <header className="App-header">
                        <img src={logo} className="App-logo" id="index-header-logo" alt="logo" />
                        <i className="material-icons" id="icon-down-scroll">arrow_downward</i>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;