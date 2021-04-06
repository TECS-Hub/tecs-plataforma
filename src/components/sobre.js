import React from 'react';
import "../assets/home.css";
import Logo from '../assets/photos/logo.png';

function Sobre(){
    return(
        <div className="sobre pb-5">
          <h1 className="text-center"><b>Quem somos nós</b></h1>       
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm">
                <img src={Logo}/>
              </div>
              <div className="col-sm">
                <p>Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo.</p>
              </div>
              <div className="col-sm">
              <p>Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo. 
                  Nós somos um coletivo que quer mudar o mundo. Nós somos um coletivo que quer mudar o mundo.</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Sobre;