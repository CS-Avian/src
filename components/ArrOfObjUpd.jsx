import { useState } from "react";

export default function ArrOfObjUpd(){

    const [car,setcar]=useState([]);
    const [carName,setname]=useState("");
    const [carMake,setmake]=useState(new Date().getFullYear());
    const [carHP,setHP]=useState("");

    function ADD(){
        setcar(c=>[...c,{name:carName,make:carMake,HP:carHP}]);

        setmake=new Date().getFullYear();
        setmake="";
        setHP="";
    }

    function REMOVE(index){
        setcar(c=>c.filter((_,i)=> i !== index ))
    }
    
    function handleNameEvent(event){
        setname(event.target.value);
    }

    function handleMakeEvent(event){
        setmake(event.target.value);
    }

    function handleHPEvent(event){
        setHP(event.target.value);
    }

    return(
        <>
        <p>
            <ul>
                {car.map((car,index)=><li key={index} onClick={()=>REMOVE(index)}>{car.name} {car.make} {car.HP}</li>)}
            </ul>
        </p>
        <input type="text" value={carName} onChange={handleNameEvent} placeholder="Enter Name"/><br/>
        <input type="number" value={carMake} onChange={handleMakeEvent} placeholder="Enter Year"/><br/>
        <input type="number" value={carHP} onChange={handleHPEvent} placeholder="Enter HP"/><br/>
        <button onClick={ADD}>Add</button>
        </>
    )
}