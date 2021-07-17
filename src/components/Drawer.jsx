import React, { useState } from "react";
import { AppContext } from "../App";
import Info from "./Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ openCard, itemsInCard, removeFromCard }) => {
  const [orderScreen, setOrderScreen] = useState(false);
  const { setItemsInCard } = React.useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const { totalPrice } = useCart();

  const placeOrder = async () => {
    try {
      setIsloading(true);
      const { data } = await axios.post(
        "https://60f035ecf587af00179d3dc9.mockapi.io/orders",
        { items: itemsInCard }
      );

      setOrderId(data.id);
      setOrderScreen(true);
      setItemsInCard([]);

      for (let i = 0; i < itemsInCard.length; i++) {
        const item = itemsInCard[i];
        await axios.delete(
          "https://60f035ecf587af00179d3dc9.mockapi.io/card/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Some error");
    }
    setIsloading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Cart{" "}
          <img
            onClick={openCard}
            className="removeItem cu-p"
            height={30}
            width={30}
            src="/img/remove.png"
            alt=""
          />
        </h2>

        {itemsInCard.length > 0 ? (
          <div className="d-flex flex-column flex" style={{overflow: 'scroll'}}>
            <div className="items flex">
              {itemsInCard.map((item) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <img
                    onClick={() => removeFromCard(item.id)}
                    className="removeItem"
                    height={30}
                    width={30}
                    src="/img/remove.png"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total: </span>
                  <div></div>
                  <b>{totalPrice} Kč</b>
                </li>
                <li>
                  <span>`Tax (21%): `</span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 21)} Kč</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={placeOrder}
                className="greenButton"
              >
                Place order
              </button>
            </div>
          </div>
        ) : (
          <Info
            image={orderScreen ? "/img/happy.png" : "/img/sad.png"}
            title={orderScreen ? "Thank you!" : "Card is empty"}
            description={
              orderScreen
                ? `Yo will recieve your order №${orderId} soon`
                : `Don't hesitate and add something to your card!`
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
