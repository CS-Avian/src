import React ,{useState}from 'react'

export default function Textform(props) {

  const [text, setText] = useState("");

  const click= ()=> {
    let newText=text.toUpperCase()
    setText(newText);
  }

  const click2= ()=> {
    let newText=text.toLowerCase()
    setText(newText);
  }

   const handler = (event)=> {
setText(event.target.value);
  }

  return (
    <div>
<div className="mb-3">
  <center>
  <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label><br />
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handler} placeholder='ENTER HERE'
  value={text}></textarea><br/>
    <button className="btn btn-primary" onClick={click}  >Upper</button>
    <button className="btn btn-primary" onClick={click2}  >Lower</button>
  </center>
</div>
</div>
  )
}

