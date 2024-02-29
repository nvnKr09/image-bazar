import React from "react";
import "material-icons/iconfont/filled.css";
import "../Styles/card.scss";
import { saveAs } from "file-saver";

const ImageCard = ({ imageData }) => {
  // console.log("card Component");
  
  // download functionality
  const implementDownload =(imgLink)=>{
    const fileName = imageData.alt_description;
    // console.log(fileName);
    saveAs(imgLink, fileName);
  }

  return (
    <div className="image-card">
      <img src={imageData.urls.small} alt={imageData.alt_description} />
      <div className="layer">
        <span>{imageData.alt_description}</span>
        <div className="like">
          <span className="material-icons">favorite</span>
          <span>{imageData.likes.toLocaleString()}</span>
        </div>
        <button className="download-btn" type="button" onClick={()=>implementDownload(imageData.urls.full)}>
          <span className="material-icons">arrow_downward_alt</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
