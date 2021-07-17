import React from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const Info = ({ image, title, description }) => {
  const { setOpenCart } = React.useContext(AppContext);

  return (
    <div className="cardEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} height={120} src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/" exact>
        <button onClick={() => setOpenCart(false)} className="greenButton">
          Back to the home screen!
        </button>
      </Link>
    </div>
  );
};

export default Info;
