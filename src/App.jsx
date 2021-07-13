import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import CardItem from "./components/CardItem";

const sneakersArray = [
  {
    id: 1,
    title: "New Balance",
    price: "2990 Kč",
    img: "/img/sneakers/nb.jpeg",
  },
  { id: 2, title: "Adidas", price: "2550 Kč", img: "/img/sneakers/a1.jpeg" },
  { id: 3, title: "Asicks", price: "1990 Kč", img: "/img/sneakers/as1.jpeg" },
  {
    id: 4,
    title: "New Balance light",
    price: "990 Kč",
    img: "/img/sneakers/nb2.jpeg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h2>All sneakers</h2>
          <div className="search-block d-flex align-center">
            <img height={33} width={33} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." type="search" />
          </div>
        </div>
        <div className="d-flex">
          {sneakersArray.map((item) => (
            <CardItem
              key={item.id}
              name={item.title}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
