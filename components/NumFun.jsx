import React,{useState} from "react"

export default function NumFun(){

    const[num,setnum]=useState(0)

    function inc(){
        setnum(c=>c+1);
    }

    function dec(){
        setnum(c=>c-1);
    }

    function reset(){
        setnum(0);
    }
    return (
        <>
        <h1>{num}</h1>
        <button onClick={inc}>INCREMENT</button>
        <button onClick={dec}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
        </>
    )
}