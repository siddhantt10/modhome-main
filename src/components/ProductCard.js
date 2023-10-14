import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  brand,
  description,
  sellPrice,
  image
}) => {
  return (
    <div className="productCard">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <div className="product-info">
          <h2>{title}</h2>
          <p className="product-author">{brand}</p>
          <p className="product-price">
            ₹{sellPrice}
          </p>
        </div>
        <Link to={`/products/${id}`}>
          <button>Checkout</button>
        </Link>
      </Link>
    </div>
  );
};

export default ProductCard;
