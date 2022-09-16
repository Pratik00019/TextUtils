import React,{useState}from 'react'
export default function TextArea(props) {
    // CSS
    const  mystyle={
            color:"orange"
    }
    const handleonclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonclicklower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
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
    }

   const handleonchange=(event)=>{
    setText(event.target.value);
   }
   const clearText=()=>{
    let a="";
    setText(a);
   }

   const copytext=()=>{
    
    var text=document.getElementById("my_box");
    text.select();
    navigator.clipboard.writeText(text.value);
   }
    const [text,setText]=useState("");

    let len =text.split(" ").length;

    const leng=()=>{
        let c=0;
        text.split(" ").forEach(element=>{
            if(element===""){
                c+=1;
            }
        })
        return(
            <div>
                {len-c} words and {text.length} characters;  
                <p>{0.008 * (len-c)} Minutes to read </p>
            </div>
        )
    }

  return (
    
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="my_box"rows="7"></textarea>
        <br></br>
        <button className="btn btn-primary mx-2" style ={mystyle} size ="lg" onClick={handleonclick}>Convert Lower to Upper Case</button>
        <button className="btn btn-primary mx-2" style={{color:"orange"}}onClick={handleonclicklower}>Convert Upper to Lower Case</button>
        <button className="btn btn-primary mx-2" style={mystyle}onClick={handleoncapital}>Capitalized Case</button>
        <button className="btn btn-primary mx-2" style={mystyle} onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" style={mystyle} onClick={copytext}>Copy Text</button>
        
        
        </div>

        <div className="container my-3"style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            {leng()}
            
            <p id="id1"></p>
            <h3>Preview</h3>
            <p>{text.length===0?"First enter some text above to display preview":text}</p>
        
        </div>
        </>
  )
}
