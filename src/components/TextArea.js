import React,{useState}from 'react'
export default function TextArea(props) {
    // CSS
    const  mystyle={
            color:"orange"
    }
    const handleonclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        console.log("upper")
        if(text.length!==0){
            props.showAlert("Converted to Upper Case!","success");
        }
    }
    const handleonclicklower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(text.length!==0){
            props.showAlert("Converted to Lower Case!","success");
        }
    }
    const handleoncapital=()=>{
        let e=""
        text.split(' ').forEach(element => { 
            for (var i = 0; i < element.length; i++) {
                if(i===0){
                    e+=element[i].toUpperCase();
                    
                }
                else{
                    e+=element[i];
                }
              }

              console.log(e);
              e+=" ";
        });
        setText(e);
        if(text.length!==0){
            props.showAlert("First letters have been capitalized!","success");
        }
    }

   const handleonchange=(event)=>{
    setText(event.target.value);
    
   }
   const clearText=()=>{
    let a="";
    setText(a);
    if(text.length!==0){
        props.showAlert("Text Cleared!","success");
    }
   }

   const copytext=()=>{
    
    var text=document.getElementById("my_box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    if(text.length!==0){
        props.showAlert("Copied to clipboard!","success");
    }
   }
    const [text,setText]=useState("");

    // let len =text.split(" ").length;

    // const leng=()=>{
    //     let c=0;
    //     text.split(/\s+/).forEach(element=>{
    //         if(element===""){
    //             c+=1;
    //         }
    //     })
    //     return(
    //         <div>
    //             {len-c} words and {text.length} characters
    //             <p>{0.008 * (len-c)} Minutes to read </p>
    //         </div>
    //     )
    // }

  return (
    
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
                <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==="dark"?"#9b9292":"white",color:props.mode==="dark"?"white":"black"}} id="my_box"rows="7"></textarea>
        <br></br>
        <button className="btn btn-primary mx-2 my-1 " style ={mystyle} size ="lg" onClick={handleonclick}>Convert Lower to Upper Case</button>
        <button className="btn btn-primary mx-2 my-1" style={{color:"orange"}}onClick={handleonclicklower}>Convert Upper to Lower Case</button>
        <button className="btn btn-primary mx-2 my-1" style={mystyle}onClick={handleoncapital}>Capitalized Case</button>
        <button className="btn btn-primary mx-2 my-1" style={mystyle} onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" style={mystyle} onClick={copytext}>Copy Text</button>
        
        
        </div>

        <div className="container my-3"style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <p id="id1"></p>
            <h3>Preview</h3>
            <p>{text.length===0?"Nothing to preview":text}</p>
        </div>
        </>
  )
}
