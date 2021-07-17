import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useCart } from "../hooks/useCart";

const Header = ({ onClick }) => {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={180} height={150} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">Sneakers Eshop</h3>
            <p className="opacity-5">only best sneakers</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClick} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/basket.png" alt="" />
          <span>{totalPrice} Kč</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              width={18}
              height={18}
              src="/img/heart-unlike.png"
              alt=""
            />
          </Link>
        </li>
        <li>
           <Link to='/orders'>
          <img width={18} height={18} src="/img/user1.png" alt="" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
