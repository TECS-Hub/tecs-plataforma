import React from 'react';
import Header from "../components/header";
import Sobre from '../components/sobre';
import Projetos from '../components/projetos';
import Equipe from '../components/equipe';
import Contato from '../components/contato';
import "../assets/home.css";

function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className="Body">
        <Sobre/>
        <Projetos/>
        <Equipe/>
        <Contato/>
      </div>
    </div>
  );
}

export default Home;
