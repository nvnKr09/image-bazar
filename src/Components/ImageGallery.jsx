import React from "react";
import 'material-icons/iconfont/filled.css';
import ImageCard from "./ImageCard";
import '../Styles/imageGallery.scss';

const ImageGallery = ({ imageList }) => {

  return (
    <div className="gallery">
      {imageList &&
        imageList.map((item) => (
          <ImageCard key={item.id} imageData={item}/>
        ))}
    </div>
  );
};

export default ImageGallery;
