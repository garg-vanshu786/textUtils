import React,{useState} from 'react'

export default function About() {
//make setafter thing as camel case
    const [ myStyle, setMyStyle] = useState(  {
        color :'black',
        backgroundColor:'white',
        border: '1px solid white'
    });

    const [btntext, setBtntext] = useState("Enable Dark Mode");
    const toggleStyle=()=>{
       if(myStyle.color === 'black'){
        setMyStyle({
            color :'white',
            backgroundColor:'black',
            border: '1px solid white'

        })
        setBtntext("Enable Dark Mode")
       }
       else
       {
        setMyStyle({
            color :'black',
        backgroundColor:'white'
        })
        setBtntext("Enable Light Mode")
       }

    }
  

  return (
    <div className='container' style = {myStyle} >
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                The Ultimate Text Utility Online                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Features we cover: </strong> TextUtils offer basic formatting like Case Change, Reverse a Sentence,Remove Extra Spaces & also displays Preview of the Text entered, Count of Words, Count of Characters, Time To Read the Text and <strong> Displays the Preview of Text Entered.</strong>
                </div>
                </div>
            </div>
            {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div> */}
            {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div> */}
            </div>
            <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
    </div>
  )
}
