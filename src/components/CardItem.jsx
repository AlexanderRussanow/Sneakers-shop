import React, { useState } from "react";
import LoadingPage from "./LoadingPage";
import { AppContext } from "../App";

const CardItem = ({
  id,
  title,
  price,
  img,
  addToCard,
  addToFavList,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext);
  const [favorite, setFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, img, price }

  const likeToggle = () => {
    addToCard(obj);
  };
  const favoriteToggle = () => {
    addToFavList(obj);
    setFavorite(!favorite);
  };

  return (
    <div className="card">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="favorite">
            <img
              onClick={favoriteToggle}
              height={15}
              width={15}
              src={favorite ? "/img/heart-like.png" : "/img/heart-unlike.png"}
            />
          </div>
          <img width="100%" height="160" src={img} />
          <h5>{title}</h5>
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
              src={isItemAdded(id) ? "/img/green-btn.png" : "/img/plus.png"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardItem;
