import React from 'react';
import "../assets/home.css";

function Header(){
    const Scroll = (amountToScroll) => {
        window.scroll(0, amountToScroll);
    }
    return(
        <div className="Header fixed-top" >
            <nav className="navbar navbar-expand-md">
                <h2 className="mb-0"><b>TECS Hub</b></h2>
                <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"  onClick={ () => Scroll(150)}>Quem somos nós</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => Scroll(920)}>Projetos</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => Scroll(2060)}>Equipe</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;