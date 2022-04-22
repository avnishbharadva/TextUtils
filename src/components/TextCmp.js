import React,{useState} from 'react';

export default function TextCmp() {
    const [text , settext] = useState("Enter Text");

    handleonChange = () => {
        console.log("onchange handled");
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
            <button className='btn btn-primary'>Convert To UpperCase</button>
            <button className='btn btn-primary mx-2'>Convert To LowerCase</button>
        </div>
        </>
    )
}
