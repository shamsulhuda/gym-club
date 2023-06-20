import React from "react";
import "./Item.css";
export default function Items({ items, addTime }) {
  const addItem = (id, time) => {
    addTime(id, time);
  };
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
                      <button
                        className="card-CTA btn btn-primary"
                        onClick={() => addItem(item.id, item.time)}
                      >
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
