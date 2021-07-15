import React, { useState } from "react";


const CardItem = ({ id, name, price, img, addToCard, addToFavList, favorited = false }) => {
  const [likeBtn, setLikeBtn] = React.useState(false);
  const [favorite, setFavorite] = React.useState(favorited);

  const likeToggle = () => {
   addToCard({id, name, price, img});
    setLikeBtn(!likeBtn);
  };
  const favoriteToggle = () => {
   addToFavList({id, name, price, img})
     setFavorite(!favorite)};

  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={favoriteToggle}
          height={15}
          width={15}
          src={favorite ? "/img/heart-like.png" : "/img/heart-unlike.png"}
        />
      </div>
      <img width={132} height={132} src={img} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price: </span>
          <b>{price}</b>
        </div>
        <img
          className="plus"
          onClick={likeToggle}
          width={20}
          height={20}
          src={likeBtn ? "/img/green-btn.png" : "/img/plus.png"}
        />
      </div>
    </div>
  );
};

export default CardItem;
