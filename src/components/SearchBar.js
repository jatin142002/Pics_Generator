import React, {useState} from 'react'

function SearchBar(props) {

    const [text, setText] = useState("");

    function OnInputChange(event){
        console.log(event.target.value);
        setText(event.target.value);
    }

    function onFormSubmit(event){
        event.preventDefault();
        // console.log(text);
        props.onSubmit(text);
    }
    
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <label>Image Search</label>
            <input type="text" onChange={OnInputChange} value={text}/>
        </form>
    </div>
  )
}

export default SearchBar



// ACCESS KEY = obMQOve0Rnuc6i6q1jm40DYIMPtjy-XHCni96w0dKxQ
// SECRET KEY = ip7MbMVtMeTSuYivU_xTHXEhaIVOVF52BW5ixyV3dis