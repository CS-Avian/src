import React,{useState,useEffect} from 'react'

export default function LifeCycle() {

    const [num,setNum]=useState(0);

    function inc(){
        setNum(c=>c+1);
    }

    useEffect(()=>{
        console.log("Called");
    },[num]);

    useEffect(()=>{
        console.log("Reload");
    });

    useEffect(()=>{
        console.log("Dont Know");
    },[]);

  return (
    <div>
        <h1>Count : {num}</h1>
        <button onClick={inc}>Press</button>
    </div>
  )
}
