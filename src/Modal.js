import menu from "./Menu";
import { useState, useRef } from "react";

function Modal() {


    const mod = useRef();
    const [closePopup, setClosePopup] = useState(false);
    const close = function(){
       
        if(!closePopup){
            setClosePopup(true);
            mod.current.style.display="none";
        }
    }
    

  return (
    <div className= "modal" ref={mod}>
      <div className="inside-modal">
        <div>Menu du jour</div>
        <div>
          Plats: <br />- {menu[0].plats[0]}
          <br /> -{menu[0].plats[1]}
        </div>
        <div>
          Deserts:
          <br /> - {menu[0].desserts[0]}
          <br /> -{menu[0].desserts[1]}
        </div>
        <div>Contactez nous par What's app : 06 66 666 666</div>
        <button onClick={close}>Fermer</button>
      </div>
    </div>
  );
}

export default Modal;