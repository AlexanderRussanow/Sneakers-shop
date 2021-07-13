import React from "react";

const CardItem = ({ name, price, img }) => {
  return (
    <div className="card">
      <div className="favorite">
        <img height={15} width={15} src="/img/heart-unlike.png" alt="" />
      </div>
      <img width={132} height={132} src={img} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price: </span>
          <b>{price}</b>
        </div>
        <button className="button">
          <img width={20} height={20} src="/img/plus.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
