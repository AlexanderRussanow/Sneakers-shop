import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Info from "../components/Info";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          "https://60f035ecf587af00179d3dc9.mockapi.io/orders"
        );
        setOrders(data.map((d) => d.items).flat());
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Error in Orders data fetching");
    }
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My orders</h2>
      </div>
      <div className="d-flex flex-wrap">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <CardItem
              key={index}
              {...item}
              loading={isLoading}
            />
          ))
        ) : (
          <Info
            image={"/img/sad.png"}
            title={"You have no orders yet"}
            description={"Make an order if you need new cool sneakers"}
          />
        )}
      </div>
    </div>
  );
};

export default Orders;
