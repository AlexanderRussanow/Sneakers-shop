import React from "react";
import CardItem from "../components/CardItem";

const Home = ({
  sneakers,
  searchLine,
  setSearchLine,
  onAddToCard,
  addToFavList,
  isLoading,
}) => {

  const renderItems = () => {
    const filteredSneakers = sneakers.filter((s) =>
      s.title.toLowerCase().includes(searchLine.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredSneakers).map((item, index) => (
      <CardItem
        key={index}
        {...item}
        addToCard={(obj) => onAddToCard(obj)}
        addToFavList={(obj) => addToFavList(obj)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>{searchLine ? `Searching: ${searchLine}...` : "All sneakers"}</h2>
        <div className="search-block d-flex align-center">
          <img height={33} width={33} src="/img/search.png" alt="Search" />
          <input
            value={searchLine}
            onChange={(e) => setSearchLine(e.currentTarget.value)}
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
