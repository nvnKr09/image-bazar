import React from 'react';
import "material-icons/iconfont/filled.css";
import '../Styles/card.scss';

const ImageCard = ({imageData}) => {

  return (
    <div className='image-card'>
        <img src={imageData.urls.small} alt={imageData.alt_description} />
        <div className="layer">
            <span>{imageData.alt_description}</span>
            <div className='like'>
                <span className='material-icons'>favorite</span>
                <span>{imageData.likes.toLocaleString()}</span>
            </div>
        </div>
    </div>
  )
}

export default ImageCard;