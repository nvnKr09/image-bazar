import React from "react";
import "material-icons/iconfont/filled.css";
import ImageCard from "./ImageCard";
import "../Styles/imageGallery.scss";
import Loader from "./Loader";

const ImageGallery = ({ imageList }) => {
  return (
    <div className="gallery">
      {imageList.length > 0 ? (
        imageList.map((item) => <ImageCard key={item.id} imageData={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ImageGallery;
