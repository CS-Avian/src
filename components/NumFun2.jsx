import React,{useState} from "react"

export default function NumFun(props){

    return (
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>props.data(props.count + 1)}>Child Calling</button>
        
        </>
    )
}