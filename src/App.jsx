import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

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
      try {
        const [cartResponse, favoriteResponse, sneakersResponse] =
          await Promise.all([
            axios.get("https://60f035ecf587af00179d3dc9.mockapi.io/card"),
            axios.get("https://60f035ecf587af00179d3dc9.mockapi.io/favorite"),
            axios.get("https://60f035ecf587af00179d3dc9.mockapi.io/sneakers"),
          ]);
        setIsLoading(false);

        setSneakers(sneakersResponse.data);
        setItemsInCard(cartResponse.data);
        setFavList(favoriteResponse.data);
      } catch (error) {
        alert("Error in useEffect in Data fetching");
      }
    }
    fetchData();
  }, []);

  const addToFavList = async (obj) => {
    try {
      const findItem = favList.find((item) => Number(item.id) === Number(obj.id))
      if (findItem) {
        axios.delete(
          `https://60f035ecf587af00179d3dc9.mockapi.io/favorite/${findItem.id}`
        );
        setFavList((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://60f035ecf587af00179d3dc9.mockapi.io/favorite",
          obj
        );
        setFavList((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Some problems with favorite list");
    }
  };

  const onAddToCard = async (obj) => {
    try {
      const findItem = itemsInCard.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        await axios.delete(
          `https://60f035ecf587af00179d3dc9.mockapi.io/card/${findItem.id}`
        );
        setItemsInCard((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        setItemsInCard((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://60f035ecf587af00179d3dc9.mockapi.io/card",
          obj
        );
        
        setItemsInCard((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Error with adding items in a Cart");
    }
  };

  const removeFromCard = (id) => {
    axios.delete(`https://60f035ecf587af00179d3dc9.mockapi.io/card/${id}`);
    setItemsInCard((prev) => prev.filter((s) => Number(s.id) !== Number(id)));
  };

  const isItemAdded = (id) => {
    return itemsInCard.some((obj) => Number(obj.parentId) === Number(id));
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
        onAddToCard,
        addToFavList,
        isLoading
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
        <Route path='/orders'>
          <Orders/>
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
