import menu from "./Menu";
import { useRef } from "react";

function Select() {
    const select = useRef()
    function closeBtn(){
        select.current.style.display = "none";
    }


    let day = ''
    for(let dayMenu of menu){
        day += `<option value="">${dayMenu.date}</option>`
         
    }
return (
  <div className="select" ref={select}>
    <select name="" id="">
      {day}
    </select>
    <button onClick={closeBtn}>j'en veux encore</button>
  </div>
);
}
export default Select;