import React from "react";
import "../styles/favoutiteItems.css"
import { useContext } from 'react';
import { dataContextCreated } from '../contextData/DataContext';

const FavouriteItems = () => {
    const {heart,toggleHeart} = useContext(dataContextCreated)
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5 className="favourite-name">Favorite Items</h5>
        <div className="favorites-container">
          {heart.map((item) => {
            const { id, image } = item;
            return (
              <div key={id} className="favorite-item" onClick={() => toggleHeart(id)}>
                <img
                  src={image}
                  alt="image"
                  className="favorites-img img"
                />
                <button
                  className="remove-btn"
                  onClick={() => toggleHeart(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavouriteItems;