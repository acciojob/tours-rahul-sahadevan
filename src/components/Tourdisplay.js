import React, { useState } from "react";
import items from "./Items";

function Display() {
  let [card, setCard] = useState(items);
  let [reload, setReload] = useState(false);
  let [isEmpty, setEmpty] = useState(false);
  let [showmore, setShowmore] = useState([]);

  function handleShowmore(index) {
    const updatedShowmore = [...showmore];
    updatedShowmore[index] = !showmore[index];
    setShowmore(updatedShowmore);
  }

  function handleDelete(index) {
    const updated = card.filter((item, i) => i !== index);
    setCard(updated);

    if (card.length <= 1) {
      setEmpty(true);
    }
  }

  function handleRefresh() {
    if (card.length === 0 && !reload) {
      window.location.reload();
    }
    setReload(true);
  }

  return (
    <div className="tour-list">
      <h1 className="title">Tours</h1>
      <button onClick={handleRefresh} className="btn">
        Refresh
      </button>
      {reload ? (
        <p>Loading...</p>
      ) : !isEmpty ? (
        card.map((item, index) => {
          return (
            <div key={index} className="single-tour">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p className="tour-info">{showmore[index] ? null : item.info}</p>
              <p className="tour-price">{item.price}</p>
              <button onClick={() => handleDelete(index)} className="delete-btn">
                Delete
              </button>
              <button
                onClick={() => handleShowmore(index)}
                className="show-more"
              >
                {showmore[index] ? "See less" : "Show more"}
              </button>
            </div>
          );
        })
      ) : (
        <p>No more tours</p>
      )}
    </div>
  );
}

export default Display;
