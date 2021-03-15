import React, { useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?q=rick and Morty&limit=10&api_key=JgLbfL5qWn06hYeTKvA5FSvmL16qUYgh";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category} </h3>

      {images.map(img=> (
        <GifGridItem 
        key = {img.id}
        img={img}/>
          ))}
    </div>
  );
};
