import React, { useEffect, useState } from "react";
import "./Item.css";
export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="items-container">
        <div className="heading">
          <strong>Select today's excersise</strong>
        </div>
        <div className="all-items mt-4">
          <div className="row">
            {items.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <div className="rte">
                      <p>{item.description}</p>
                    </div>
                    <p>For age: {item.age}</p>
                    <p>Time required: {item.time}s</p>
                    <div className="action-btn">
                      <button className="card-CTA btn btn-primary">
                        Add to list
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
