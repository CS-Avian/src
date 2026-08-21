import React from "react";

export default function Ci(props) {

  return (
    <div>
      
   <button onClick={() => props.data(props.Count + 100)}>Child Calling</button>
    </div>
  );
}