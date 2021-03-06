import './App.scss';
import { useState, useRef } from "react";
//import menu from './Menu';
import Modal from './Modal';
import Select from "./Select";


function App() {
  const sound = useRef();
  
  const [modalVisible, setModalVisible] = useState(false);
  const [playSound,setPlaySound]= useState(false);
  
  function openM(e) {
    if (!modalVisible){

    setModalVisible(true);}
    console.log('test')



  }
  function toggleSound(){
    if(!playSound){
     
      sound.current.play();
      setPlaySound(true);
    }else {
      sound.current.pause();
      setPlaySound(false);

    }
  }
  
  return (
    <div className="App">
      <Modal />
      <Select />
      <header className="App-header">
        <img src="img/logo.png" alt="logo"></img>
        <img
          onClick={toggleSound}
          className="radio"
          src="img/radio.png"
          alt="radio"
        ></img>
        <audio ref={sound}>
          <source src="song/happy.mp3" />
        </audio>
      </header>
      <main>
        <div className="first-page">
          <section>
            <div className="striped-circle"></div>
            <div className="intro">
              <div className="round-photo"></div>
              <p>
                La Maison Salvi vous offre chaque jour le choix entre un menu
                carné ou vegé: 10e livraison incluse (sur Rennes uniquement)
              </p>
              <p>
                Des produits saines et simples, de saison, mis en musique et en
                couleur par le Chef Pablo. Qui d'autre aurait pu réconcilier la
                famille autour d'une idée aussi simple et chalereuse?
              </p>
              <p>Il est temps de passer commande!</p>

              <button onClick={openM}>menu du jour</button>
            </div>
            <div className="cook-photo"></div>
            <div className="circle"></div>
          </section>
        </div>
        <div className="second-page">
          <section>
            <div className="archive">
              <h1>
                <strong>Archives</strong> Gustatives
              </h1>
              <p>
                Un menu de la Maison Salvi vous a séduit? Vous refuser de croire
                qu'il ne reviendra pas aà la carte?
              </p>
              <p>
                Je vous propose de passer en revue les recettes et donner votre
                avis. Choisissez votre favori !
              </p>
              <button>voter</button>
            </div>
            <div className="illustration">
              <div className="splash">
                <div className="suri"></div>
              </div>
            </div>
          </section>
          <div className="caroussel">
            <img src="img/1.jpg" alt="meal"></img>
            <img src="img/2.jpg" alt="meal"></img>
            <img src="img/3.jpg" alt="meal"></img>
          </div>
        </div>
      </main>
      <footer>
        <a href="https://www.interface3.be/">Interface3</a>
        <span> Creé avec passion par </span>
        <a href="https://www.interface3.be/">La Team WEB09</a>
      </footer>
    </div>
  );
}

export default App;
