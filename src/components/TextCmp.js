import React,{useState} from 'react';

export default function TextCmp() {
    const [text , settext] = useState("Enter Text");

    const handleUpCase = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
    }

    const handleLowCase = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
    }

    const handleonChange = (event)=>{
        console.log("onchange handled");
        settext(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1 className='my-3'>TextUtils - App</h1>
        </div>
        <div className='container'>
            <h2 className='my-2'>Enter Text</h2>
            <div className="form my-3">
                <textarea className="form-control" value={text} onChange={handleonChange} placeholder="Leave a comment here" id="usertext" rows="8"></textarea>
                {/* <label for="floatingTextarea">Comments</label> */}
            </div>
            <button className='btn btn-primary' onClick={handleUpCase}>Convert To UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowCase}>Convert To LowerCase</button>
        </div>
        <div className='container my-3'>
            <p>Words {text.split(" ").length} Characters {text.length}</p>
            <p>Reading Time {0.08 * text.split(" ").length}</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
