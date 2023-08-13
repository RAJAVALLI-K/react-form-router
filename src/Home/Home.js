import React from "react";
import './Home.css';

const List = () => {
  let array = JSON.parse(localStorage.getItem("totalTask"));
  return (
    <div>
      {array?.map((e, i) => {
        return (
          <div key={i}>
            <div>
              <h1>PRODUCT DETAILS</h1>
              <p><h4>Product Name:</h4>{e.name}</p>
              <p><h4>Product Price:</h4>{e.price}</p>
              <p><h4>Product Weight:</h4>{e.weight}</p>
              <p><h4>Product Item:</h4>{e.item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
