import React,{useState} from 'react';
import SearchBar from './SearchBar';
import Axios from 'axios';

function App() {

  const [images, setImages] = useState([]);

  async function onSearchSubmit(text){
    console.log(text);
    const response = await Axios.get("https://api.unsplash.com/search/photos",{
      params:{
        query: text
      },
      headers: {
        Authorization: 'Client-ID obMQOve0Rnuc6i6q1jm40DYIMPtjy-XHCni96w0dKxQ'
      }
    });

    console.log(response.data.results);
    setImages(response.data.results);
  }

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit}/>
      Found : {images.length} images
    </div>
  )
}

export default App