import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
