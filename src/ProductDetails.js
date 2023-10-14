import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {
        // Scroll the page to the top when redirected
        window.scrollTo(0, 0);
    }, []);

  let title, brand, description, sellPrice, image;

  switch (id) {
    case "1":
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image = "id1.jpg";
      break;
    case "2":
      title = "The good chair";
      brand = "ModHome";
      description = "issa good chair trust me";
      sellPrice = "36999";
      image =
        "https://images.unsplash.com/photo-1685453628701-bdf02c353bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80";
      break;
    case "3":
      title = "billy's yellow chair";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "32999";
      image =
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80";
      break;
    case "4":
      title = "just a chair";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "21999";
      image =
        "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
      break;
    case "5":
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image =
        "https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
      break;
    case "6":
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image =
        "https://images.unsplash.com/photo-1616952391192-d8bc85de60d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80";
      break;
    case "7":
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image =
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80";
      break;
    case "8":
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image =
        "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80";
      break;
    default:
      title = "The good sofa";
      brand = "ModHome";
      description = "issa good sofa trust me";
      sellPrice = "78999";
      image = "id1.jpg";
      break;
  }
  return (
    <div className="product-details">
      <div className="product-details-box">
        <div className="product-details-left">
          <h1>{title}</h1>
          <h2>{brand}</h2>
          <p>{description}</p>
          <h3>₹{sellPrice}</h3>
        </div>
        <div className="product-details-right">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
