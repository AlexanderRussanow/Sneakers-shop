import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={180} height={150} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">Sneakers Eshop</h3>
            <p className="opacity-5">only best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/basket.png" alt="" />
            <span>Price tag</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user1.png" alt="" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h2>All sneakers</h2>
          <div className="search-block d-flex align-center">
            <img height={33} width={33} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." type="search" />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img height={15} width={15} src="/img/heart-unlike.png" alt="" />
            </div>
            <img width={132} height={132} src="/img/nb.jpeg" />
            <h5>New Balance</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>2990 Kč</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={132} height={132} src="/img/a1.jpeg" />
            <h5>Adidas</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>2550 Kč</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={132} height={132} src="/img/as1.jpeg" />
            <h5>Asicks</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>1990 Kč</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={132} height={132} src="/img/nb2.jpeg" />
            <h5>New Balance light</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>990 Kč</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
