import React,{useState} from "react";

export default function ArrayUpd(){

    const[car,setcar]=useState({name : "Ford", model : 2024 , HP : 234})

    function handleNameChange(event){
        setcar(c=>({...c,name : event.target.value}))
    }

    function handleModelChange(){
        setcar(c=>({...c,model : event.target.value}))
    }
    
    function handleHPChange(){
        setcar(c=>({...c,HP : event.target.value}))
    }
    
    return(
        <>
        <h1> The car is {car.name} its model is {car.model} and HP is {car.HP}</h1>
        <input type="text" value={car.name} onChange={handleNameChange} /><br/>
        <input type="number" value={car.model} onChange={handleModelChange} /><br/>
        <input type="number" value={car.HP} onChange={handleHPChange} />
        </>
    )
}