import React from 'react';
import imageData from './image_data';
import ScrapBookImage from './scrapbook_images';
import './scrapbook.css';

export default props => {

    const images = imageData.map((item, index) => {
        return <ScrapBookImage key={index} about={item}/>
    });

    return(

        <div className="scrapbook-container">
            {images}
        </div>
    )
}
