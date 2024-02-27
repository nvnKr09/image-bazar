import React from "react";
import "material-icons/iconfont/filled.css";
import ImageCard from "./ImageCard";
import "../Styles/imageGallery.scss";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageGallery = ({ imageList, fetchImage }) => {
  // console.log("Gallery Component");
  

  return (
    <div className="gallery">
      <InfiniteScroll
        dataLength={imageList.length}
        next={fetchImage}
        hasMore={true}
        loader={<div style={{ gridColumn:"1/-1" }}><Loader/></div>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {imageList.length > 0 &&
          imageList.map((item) => <ImageCard key={item.id} imageData={item} />)}
      </InfiniteScroll>
    </div>
  );
};

export default ImageGallery;
