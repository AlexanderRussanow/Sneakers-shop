import React from "react";
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";

const Favorites = ({ favList, onAddToCard, addToFavList }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My favorites sneakers</h2>
      </div>
      <div className="d-flex flex-wrap">
        {favList.length > 0 ? (
          favList.map((item) => (
            <CardItem
              key={item.id}
              {...item}
              favorited={true}
              addToCard={onAddToCard}
              addToFavList={addToFavList}
            />
          ))
        ) : (
          <div className="cardEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/sad.png"
            />
            <h2>Your favorite list is empty!</h2>
            <p>Don't hesitate and add something for your next purchase here!</p>
            <Link to="/" exact>
              <button className="greenButton">Back to the home screen!</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
