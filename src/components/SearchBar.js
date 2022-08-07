import React, {useState} from 'react'

function SearchBar() {

    const [text, setText] = useState("");

    function OnInputChange(event){
        console.log(event.target.value);
        setText(event.target.value);
    }

    function onFormSubmit(event){
        event.preventDefault();
        console.log(text);
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
