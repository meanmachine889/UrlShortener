import React, { useState } from "react";


function Input({urlfunc}){

    const [url, setUrl] = useState('');

    function handleChange(event){
        const u = event.target.value;
        setUrl(u);
    }

    function handleClick(){
        urlfunc(url);
    }
    return(
        <div className="Urlinput">
            <h1>URL Shortener</h1>
            <input type="text" className="form-control" id="url" name="url" placeholder="enter url..." value={url} required="" fdprocessedid="5613ae" onChange={handleChange}></input>
            {/* <input type="text" value={url} name="url" onChange={handleChange}/> */}
            <button className="btn btn-outline-secondary d-inline-flex align-items-center" type="button" onClick={handleClick}>
                Submit
            </button>
            {/* <button onClick={handleClick}>Submit</button> */}
        </div>
    )
}

export default Input;