import menu from "./Menu";

function Select() {
    let day = ''
    for(let dayMenu of menu){
        day += `<option value="">${dayMenu.date}</option>`
         
    }
return (
  <div className="select">
    <select name="" id="">
      {day}
    </select>
    <button>j'en veux encore</button>
  </div>
);
}
export default Select;