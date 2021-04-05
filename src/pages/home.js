import React from 'react';
import Header from "../components/header";
import Logo from '../assets/photos/logo.png';
import ProjetosPhoto from '../assets/photos/projetos-photo.png';
import ProjetosBorder from '../assets/photos/projetos-border.png';
import EquipeBianca from '../assets/photos/bianca.png';
import EquipeBeatriz from '../assets/photos/beatriz.png';
import EquipeLuiza from '../assets/photos/luiza.png';
import EquipeBorder from '../assets/photos/equipe-border.png';
import "../assets/home.css";

function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className="Body"> 
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


        <div className="equipe mt-5 pb-5" id="equipe">
          <h1 className="text-center"><b>Nossa equipe</b></h1>
          <div className="container mt-5">
            <div className="row membro-equipe">
              <div className="col">
                <img className="img-back" src={EquipeBorder}/>
                <img className="img-front img-left img-top" src={EquipeBianca}/>
              </div>
              <div className="col-8">
                <h2><b>Bianca Inocêncio</b></h2>
                <h5>A chefa</h5>
                <p>Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca.
                   Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                    Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca. 
                    Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                     Um pouco sobre a Bianca. Idade, o que faz e os carambas</p>
              </div>
            </div>
            <div className="row mt-5 membro-equipe">
              <div className="col-8 text-right">
                <h2><b>Ana Beatriz</b></h2>
                <h5>A tech</h5>
                <p>Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca.
                   Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                    Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca. 
                    Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                     Um pouco sobre a Bianca. Idade, o que faz e os carambas</p>
              </div>
              <div className="col-sm">
                <img className="img-back img-left" src={EquipeBorder}/>
                <img className="img-front img-top" src={EquipeBeatriz}/>
              </div>
            </div>
            <div className="row mt-5 membro-equipe">
              <div className="col-sm">
                <img className="img-back" src={EquipeBorder}/>
                <img className="img-front img-left img-top" src={EquipeLuiza}/>
              </div>
              <div className="col-8">
                <h2><b>Luiza Fattori</b></h2>
                <h5>A designer</h5>
                <p>Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca.
                   Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                    Um pouco sobre a Bianca. Idade, o que faz e os carambas. Um pouco sobre a Bianca. 
                    Idade, o que faz e os carambas. Um pouco sobre a Bianca. Idade, o que faz e os carambas.
                     Um pouco sobre a Bianca. Idade, o que faz e os carambas</p>
              </div>
            </div>
          </div>
        </div>


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
      </div>
    </div>
  );
}

export default Home;
