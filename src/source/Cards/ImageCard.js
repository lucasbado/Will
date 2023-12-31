import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, description }) => {
    return (
       <div className="card">
         <img src={image} alt={title} />
         <h3>{title}</h3>
         <p>{description}</p>
       </div>
    );
   };
   
export default ImageCard;
