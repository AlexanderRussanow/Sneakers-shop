import React from "react";

const Drawer = () => {
  return (
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">
        Cart{" "}
        <img
          className="removeItem cu-p"
          height={30}
          width={30}
          src="/img/remove.png"
          alt=""
        />
      </h2>

      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(/img/a1.jpeg)" }}
            className="cartItemImg"
          ></div>

          <div className="mr-20 flex">
            <p className="mb-5">Adidas Sneakers</p>
            <b>2550 Kč</b>
          </div>
          <img
            className="removeItem"
            height={30}
            width={30}
            src="/img/remove.png"
            alt=""
          />
        </div>
      </div>

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Total: </span>
            <div></div>
            <b>Sneakers price</b>
          </li>
          <li>
            <span>Tax: </span>
            <div></div>
            <b>Tax value</b>
          </li>
        </ul>
        <button className="greenButton">Place order</button>
      </div>
    </div>
  );
};

export default Drawer;
