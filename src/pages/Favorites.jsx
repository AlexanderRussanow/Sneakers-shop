import React from "react";
import { AppContext } from "../App";
import CardItem from "../components/CardItem";
import Info from "../components/Info";

const Favorites = ({onAddToCard, addToFavList}) => {
  const { favList } = React.useContext(AppContext);

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
              addToCard={(obj) => onAddToCard(obj)}
              addToFavList={(obj) => addToFavList(obj)}
            />
          ))
        ) : (
          <Info
            image={"/img/sad.png"}
            title={`Your favorite list is empty!`}
            description={
              "Don't hesitate and add something for your next purchase here!"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Favorites;
