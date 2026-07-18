
import React, { useState } from "react"


export default function About(props) {
    let mystyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#333':'white',
         border: props.mode === 'dark' ? '1px solid red' : '1px solid black'  

    }
     let buttonStyle = {
        backgroundColor: 'transparent',  
        color: props.mode === 'dark' ? 'white' : 'black',  // Text color matches theme
        border: 'none',  // No border
        boxShadow: 'none',  // No shadow
        padding: '10px 0',  // Just some padding
    }
//     const [mystyle, setMyStyle] = useState(

//         {
//             color: 'black',
//             backgroundColor: 'white',
//             border: '2px solid black'
//         }
//     )

//     const [buttonText, setButtonText] = useState("Enable dark Mode")


//   const  toggleStyle = () => {
//         if (mystyle.color === 'white') {
//             setMyStyle(
//                 {
//                     color: 'black',
//                     backgroundColor: 'white',
//                 }


//             )
//             setButtonText("Enable Light Mode")
//         }
//         else {

//             console.log("Already Changed the state")
//             setMyStyle(
//                 {
//                     color: 'White',
//                     backgroundColor: 'black',
//                     border: '2px solid red  '
//                 }
//             )

//           setButtonText("Enable Dark Mode")
//         }

//     }

    return (

        <div className="accordion" id="accordionExample" style={mystyle}>
            <h1>About Us</h1>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={buttonStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                       <strong>TextUtils</strong> is a simple text manipulation tool that helps you analyze and modify your text.   
                        You can convert text to
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={buttonStyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
                    <div className="accordion-body" style={mystyle}>
                        <strong>UPPERCASE</strong> or <strong>lowercase</strong>, count words and characters,
                extract email addresses, and even listen to your text using text-to-speech.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={buttonStyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                         <p>
                Just type or paste your text in the text area above, and click any button to perform an action.
                You can also toggle dark mode for better visibility.
            </p>

            <p style={{ textAlign: 'center', marginTop: '20px', opacity: 0.7 }}>
                Made with using React
            </p>
                    </div>
                </div>
            </div>

            
        </div>


    )

}