import React,{useState} from 'react'

export default function Textform(props) {
    const handupClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Uppercase","success");
    }
    
    const handloClick=()=>{
        console.log("Lowercase was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to Lowercase","success");
    }
    
    const handleOnchange=(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
   
    const copyText=()=>{
        let Text=document.getElementById("Textarea1");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("text is copied to clipboard","success");

    }

    const removeExtra=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed","success");

    }

    const cleartext=()=>{
        let newText="";
        setText(newText);
        props.showAlert("text is cleared","success");

    }

     const[text,setText]=useState('');
    
    
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control style=`} id="Textarea1" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#6c757d':'white'}}  rows="10"></textarea>

            <button className="btn btn-primary my-2" onClick={handupClick} >change to Upper_case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handloClick} >change to Lower_case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={cleartext} >clear text</button>
            <button className="btn btn-primary mx-2" onClick={copyText} >copy text to clipboard</button>
            <button className="btn btn-primary mx-2" onClick={removeExtra} >Remove extra space</button>
        </div>

        <div className="container my-4" >
        <h1>this is a counter</h1>
        <p>there are {text.split(' ').length-1} words and {text.length} characters</p>
        <h3>PREVIEW</h3>
        <p>{text}</p>
        
        </div>

    </div>
  )
}
