import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Items from "../Items/Items";
import Sidebar from "../Sidebar/Sidebar";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const addTime = (id, addTime) => {
    console.log(id, parseInt(addTime));
    setTime(time + parseInt(addTime));
  };
  return (
    <div>
      <div className="row g-0 main-div-start">
        <div className="col-md-9 lef-side">
          <div className="container">
            <Header></Header>
            <Items items={items} addTime={addTime}></Items>
          </div>
        </div>
        <div className="col-md-3 right-side">
          <Sidebar time={time}></Sidebar>
        </div>
      </div>
    </div>
  );
}
