import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [itemsInCard, setItemsInCard] = useState([]);
  const [favList, setFavList] = useState([]);
  const [openCart, setOpenCart] = React.useState(false);
  const [searchLine, setSearchLine] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://60f035ecf587af00179d3dc9.mockapi.io/card"
      );
      const favoriteResponse = await axios.get(
        "https://60f035ecf587af00179d3dc9.mockapi.io/favorite"
      );
      const sneakersResponse = await axios.get(
        "https://60f035ecf587af00179d3dc9.mockapi.io/sneakers"
      );

      setIsLoading(false);

      setSneakers(sneakersResponse.data);
      setItemsInCard(cartResponse.data);
      setFavList(favoriteResponse.data);
    }
    fetchData();
  }, []);

  const addToFavList = async (sne) => {
    try {
      if (favList.find((obj) => obj.id === sne.id)) {
        axios.delete(
          `https://60f035ecf587af00179d3dc9.mockapi.io/favorite/${sne.id}`
        );
        setFavList((prev) => prev.filter((item) => item.id !== sne.id));
      } else {
        const { data } = await axios.post(
          "https://60f035ecf587af00179d3dc9.mockapi.io/favorite",
          sne
        );
        setFavList((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Some problems with favorite list");
    }
  };

  const onAddToCard = (obj) => {
    console.log(obj);
    if (itemsInCard.find((sne) => Number(sne.id) === Number(obj.id))) {
      axios.delete(
        `https://60f035ecf587af00179d3dc9.mockapi.io/card/${obj.id}`
      );
      setItemsInCard((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://60f035ecf587af00179d3dc9.mockapi.io/card", obj);
      setItemsInCard((prev) => [...prev, obj]);
    }
  };

  const removeFromCard = (id) => {
    axios.delete(`https://60f035ecf587af00179d3dc9.mockapi.io/card/${id}`);
    setItemsInCard((prev) => prev.filter((s) => s.id !== id));
  };

  const isItemAdded = (id) => {
    return itemsInCard.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        sneakers,
        itemsInCard,
        favList,
        isItemAdded,
        setOpenCart,
        setItemsInCard,
      }}
    >
      <div className="wrapper clear">
        {openCart ? (
          <Drawer
            openCard={() => setOpenCart(!openCart)}
            itemsInCard={itemsInCard}
            removeFromCard={removeFromCard}
          />
        ) : null}
        <Header onClick={() => setOpenCart(!openCart)} />

        <Route path="/favorites" exact>
          <Favorites onAddToCard={onAddToCard} addToFavList={addToFavList} />
        </Route>
        <Route path="/" exact>
          <Home
            itemsInCard={itemsInCard}
            sneakers={sneakers}
            searchLine={searchLine}
            setSearchLine={setSearchLine}
            onAddToCard={onAddToCard}
            addToFavList={addToFavList}
            isLoading={isLoading}
          />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
