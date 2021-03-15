import React, { useState } from 'react'
import { Addcategory } from './components/Addcategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     setCategories([...categories, 'HUnterxHunter']);
    // };
    return (
      <div>
        <h2> GifExpertApp </h2> 
        <Addcategory setCategories={setCategories} />
        <hr />
        <ol>
          
          {categories.map((category) => {
            <GifGrid 
              key={ category } 
              category={ category }
              />;
          })}
        </ol>
      </div>
    );
}