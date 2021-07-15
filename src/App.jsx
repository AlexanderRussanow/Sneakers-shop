import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";

function App() {
  const [openCart, setOpenCart] = React.useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [itemsInCard, setItemsInCard] = useState([]);
  const [searchLine, setSearchLine] = useState("");
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    //   fetch("https://60f035ecf587af00179d3dc9.mockapi.io/sneakers").then((res) =>
    //     res.json().then((json) => setSneakers(json))
    //   );
    // }, []
    axios
      .get("https://60f035ecf587af00179d3dc9.mockapi.io/sneakers")
      .then((res) => setSneakers(res.data));

    axios
      .get("https://60f035ecf587af00179d3dc9.mockapi.io/card")
      .then((res) => setItemsInCard(res.data));

    axios
      .get("https://60f035ecf587af00179d3dc9.mockapi.io/favorite")
      .then((res) => setFavList(res.data));
  }, []);

  const addToFavList = (sne) => {
    if (favList.find(obj => obj.id === sne.id)) {
      console.log(sne.id)
      axios.delete(`https://60f035ecf587af00179d3dc9.mockapi.io/favorite/${sne.id}`)
      setFavList((prev) => prev.filter(item => item.id !== sne.id))
    } else {
    axios.post("https://60f035ecf587af00179d3dc9.mockapi.io/favorite", sne);
    setFavList((prev) => [...prev, sne])}
  };

  const onAddToCard = (obj) => {
    axios.post("https://60f035ecf587af00179d3dc9.mockapi.io/card", obj);
    setItemsInCard((prev) => [...prev, obj]);
  };

  const removeFromCard = (id) => {
    axios.delete(`https://60f035ecf587af00179d3dc9.mockapi.io/card/${id}`);
    setItemsInCard((prev) => prev.filter((s) => s.id !== id));
  };

  return (
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
        <Favorites favList={favList} onAddToCard={onAddToCard} addToFavList={addToFavList} />
      </Route>
      <Route path="/" exact>
        <Home
          sneakers={sneakers}
          searchLine={searchLine}
          setSearchLine={setSearchLine}
          onAddToCard={onAddToCard}
          addToFavList={addToFavList}
        
        />
      </Route>
    </div>
  );
}

export default App;
