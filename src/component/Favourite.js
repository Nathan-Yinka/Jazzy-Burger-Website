import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { dataContextCreated } from '../contextData/DataContext';
import "../styles/favourite.css";

const Favourite = ({product}) => {
  const {toggleHeart,heart} = useContext(dataContextCreated);
  return (
    <div>
      <div className="heart-bck" onClick={()=>toggleHeart(product.id)}>
        {product.heart && <FaHeart className="heart red" />}
        {!product.heart && <FaRegHeart className="heart" />}
      </div>
    </div>
  );
};

export default Favourite;
