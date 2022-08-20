import React from 'react'

function ImageList(props) {

    console.log(props.images);

    const images = props.images.map((image)=>{
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    });
    return(
        <div>
            {images}
        </div>
    )
}

export default ImageList