import React from 'react';
import "../assets/home.css";
import ProjetosPhoto from '../assets/photos/projetos-photo.png';
import ProjetosBorder from '../assets/photos/projetos-border.png';

function Projetos(){
    return(
        <div className="projetos pt-5 pb-5" id="projetos">
          <div className="projetos-conteudo">
            <h1 className="text-center"><b>Projetos</b></h1>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm text-center">
                  <div className="img-group">
                    <img className="img-back img-left img-top" src={ProjetosBorder}/>
                    <img className="img-front" src={ProjetosPhoto}/>
                  </div>  
                  <h2 className="mt-4">Raízes</h2>
                  <p>O projeto Raízes é voltado para a resignificação da moda. 
                    Foi feito para mostrar que moda e cultura andam juntas</p>
                  <a href="#" className="saiba-mais">Saiba mais</a>
                </div>
                <div className="col-sm text-center projetos-img-down">
                  <div className="img-group">
                    <img className="img-back" src={ProjetosBorder}/>
                    <img className="img-front img-top img-left" src={ProjetosPhoto}/>
                  </div>  
                  <h2 className="mt-4">E-book</h2>
                  <p>O nosso projeto do nosso e-book quer falar sobre a Lista Suja,
                    a lista de empresas e distribuidoras que de alguma forma 
                    trabalham com trabalho insustentável ou escravo.</p>    
                  <a href="#" className="saiba-mais">Saiba mais</a>    
                </div>
                <div className="col-sm text-center">
                  <div className="img-group">
                    <img className="img-back img-top" src={ProjetosBorder}/>
                    <img className="img-front img-left" src={ProjetosPhoto}/>
                  </div>  
                  <h2 className="mt-4">Base de dados</h2>
                  <p>O nosso banco de dados quer abranger o maior numero
                    de dados para deixarmos o mundo cada vez mais trasparente</p>
                  <a href="#" className="saiba-mais">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    );
}

export default Projetos;