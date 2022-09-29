import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUPClick = ()=>{
        // console.log("Upper Case Was Clicled" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowClick = ()=>{
        // console.log("Upper Case Was Clicled" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleclearClick = ()=>{
        // console.log("Upper Case Was Clicled" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = ()=>{
        // console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }


    const Capitalize1st=(e)=>{
      e.preventDefault();
        let capital=text.split(" ");
        for(let i=0;i<capital.length;i++){
          capital[i]=capital[i][0].toUpperCase() + capital[i].slice(1);
        }
        setText(capital.join(" "));
        props.showAlert("Capitalized First Letter", "success");
    }


    
      const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
        props.showAlert("Text Reveresed", "success");
      };
    

    


    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

  

    const [text, setText] = useState('');
    //  text= "new Text";  //wrong way
    //  setText("new txt"); //correct way
  return (

    <>
  <div className="container" style= {{color : props.mode === 'dark'?'white':'#042743'}}>
    <h1 >{props.heading} </h1>
    <div className="mb-3">
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={handleUPClick}>Convert to Upper Case</button>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={handleclearClick}>Clear Text</button>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={handleCopy}>Copy Text To Clipboard</button>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary btn-lg btn-bloc mx-2" onClick={Capitalize1st}>Capitalize first Letter</button>
    <button className="btn btn-primary btn-lg btn-bloc my-2 mx-2" onClick={reversed}>Reverse Text</button>



</div>
<div className="container my-3" style= {{color : props.mode === 'dark'?'white':'#042743'}}>
    <h2>Your Text summary</h2>
    <p>{text.split(" ").length} words,{text.length} characters</p>
    <p>{0.008 *text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
</div>
</>
  )
}
