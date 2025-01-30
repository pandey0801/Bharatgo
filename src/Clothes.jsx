import React, { useState, useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../src/redux/cartSlice";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) =>
        setProducts(data.filter((product) => product.category.name === "chothes nag insta"))
      ) // Filter clothes
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("data", cartItems);

  return (
    <div className="home-container">
      <h1>Clothes</h1>
      <input
        type="text"
        placeholder="Search a product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {products
          .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <div className="add-button" onClick={() => dispatch(addItem(product))}>+</div>
              <span className="category">{product.category.name}</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Clothes;
