import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
//este functional componente recibe un arreglo de imagenes y muestras las mismas
const ImageList = ({ images }) => {
  console.log(images);
  /* AQUI ES COMO SI FUERA image.description,image.id,image.urls */
  const imagesList = images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imagesList}</div>;
};

export default ImageList;
