import React from 'react';
import "../assets/home.css";

function Contato(){
    return(
        <div className="contato pb-4 pt-5" id="contato">
          <div className="mt-5">
            <h1 className="text-center mb-5"><b>Contato</b></h1>
            <p className="form-contato">Escreva para a gente e acompanhe nossos projetos</p>
            <form classnName="align-center">
              <div className="form-group form-contato">
                <input type="text" placeholder="Nome" className="form-control"/>
              </div>
              <div className="form-group form-contato">
                <input type="text" placeholder="Email" className="form-control"/>
              </div>
              <div className="form-group form-contato">
                <textarea name="Text1" cols="100" rows="5" className="form-control">Mensagem</textarea>
              </div>
              <button type="submit" className="btn-enviar pull-right">Enviar</button>
            </form>
          </div>
        </div>
    );
}

export default Contato;