import React,{useState} from 'react';

export default function TextCmp(props) {
    const [text , settext] = useState("");

    const handleUpCase = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
    }

    const handleLowCase = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
    }

    const handleonChange = (event)=>{
        // console.log("onchange handled");
        settext(event.target.value);
    }

    const handleClear = () =>{
        let newtext = "";
        settext(newtext);
    }

    const handleCopyText = ()=>{
        let utext = document.getElementById('usertext');
        utext.select();
        navigator.clipboard.writeText(utext.value);
    }

    return (
        <>
        <div className='container'>
            <h2 className='my-2' style={props.mode==="light"?{color:'black'}:{color:"white"}}>{props.heading}</h2>
            <div className="form my-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={props.mode==="light"?{backgroundColor:'white',color:"black"}:{backgroundColor:"grey",color:"white"}} id="usertext" rows="8"></textarea>
                {/* <label for="floatingTextarea">Comments</label> */}
            </div>
            <button className='btn btn-primary' onClick={handleUpCase}>Convert To UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowCase}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className='container my-3' style={props.mode==="light"?{color:'black'}:{color:"white"}}>
            <h2>Text Summary</h2>
            <p>Words {text.split(" ").length} Characters {text.length}</p>
            <p>Reading Time {0.08 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Please Enter Text"}</p>
        </div>
        </>
    )
}
