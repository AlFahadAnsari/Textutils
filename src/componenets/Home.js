import React from "react";
import { useState } from "react";




 

function Home(props) {

    let input=(event)=>{
        setText(event.target.value)
    }


    
    // buttons onclick

    //  upper function
    function upper(){
        let newtext = text.toUpperCase();
         setText(newtext)
         if (text === "") {
            alert("plase enter text")
        } else {
            alert(' successfull ')
        }
    }





        //  lower function
    function lower(){
        let newtext = text.toLowerCase();
         setText(newtext)
         if (text === "") {
            alert("plase enter text")
        } else {
            alert(' successfull ')
        }
    }




            //  clear function
    function clear(){
        let newtext = "";
         setText(newtext)
         if (text === "") {
            alert("plase enter text")
        } else {
            
        }
    }





            //  copy function
    function copy(){
        let txt = document.getElementById('myBox')
        txt.select()
        navigator.clipboard.writeText(txt.value);
        if(text ===''){
            alert("plaese enter text")
        }else{
            alert('your text copy ')
        }
    }
    



    // text area functions
    const [text,setText]=useState("")

    
    return (
        <>


            <div className="mb-3 container my-3 p-3" >
                <h1> enter your text here </h1>
                <textarea className="form-control" onChange={input} value={text} id="myBox" onClick={input} rows="8"></textarea>


                       {/* buttons  */}
                <button className="btn btn-success my-3 mx-2" onClick={upper}>ToUpperCase</button>
                <button className="btn btn-success my-3 mx-2" onClick={lower}>ToLowerCase</button>
                <button className="btn btn-success my-3 mx-2" onClick={clear}>Clear Text</button>
                <button className="btn btn-success my-3 mx-2" onClick={copy}>Copy</button>


                            {/* text summary */}

                <h1>Your Text Summary</h1>

                <p>{text.split(" ").length} word and {text.length} Characters</p>

                <p>{0.008 * text.split(" ").length} Minute Read</p>


                <h3>Preview</h3>

                <p>{text}</p>
                


            </div>


        </>
    )
}


export default Home