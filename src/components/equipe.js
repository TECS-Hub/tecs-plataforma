import React from 'react';
import "../assets/home.css";
import EquipeBianca from '../assets/photos/bianca.png';
import EquipeBeatriz from '../assets/photos/beatriz.png';
import EquipeLuiza from '../assets/photos/luiza.png';
import EquipeBorder from '../assets/photos/equipe-border.png';

function Equipe(){
    return(
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
    );
}

export default Equipe;