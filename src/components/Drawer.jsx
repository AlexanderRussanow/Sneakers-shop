import React from "react";

const Drawer = ({ openCard, itemsInCard, removeFromCard }) => {
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
          <div>
             <div className="items">
            {itemsInCard.map((item) => (
              <div key={item.id} className="cartItem d-flex align-center mb-20">
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
        ) : (
          <div className="cardEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/sad.png"
            />
            <h2>Card is empty</h2>
            <p>Don't hesitate and add something to your card!</p>
            <button onClick={openCard} className="greenButton">Back to the home screen!</button>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Drawer;
