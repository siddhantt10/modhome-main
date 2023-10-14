import React from "react";
import "./Home.css";
import HomepageHero from "./components/HomepageHero.js";
import ProductCard from "./components/ProductCard.js";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero">
          <HomepageHero />
          <div className="home-hero-text">
            <img
              className="home-hero-logo"
              src="fulllogo-lte.png"
              alt="Logo"
            ></img>
            <p>
              Elegant Abodes, Inspired by Art: Luxury Living Redefined for the
              Discerning Connoisseur of Fine Living.
            </p>
          </div>
        </div>
      </div>
      <div className="home-con-1">
        <div className="home-con-1-con">
          <img className="home-con-1-lamp" src="lamp.png" alt="lamp"></img>
          <div className="home-con-1-text">
            <h1>Let's Explore</h1>
          </div>
          <div className="home-con-1-prods">
            <ProductCard
              id="1"
              title="The good sofa"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="78999"
              image="id1.jpg"
            />
            <ProductCard
              id="2"
              title="The good chair"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="36999"
              image="https://images.unsplash.com/photo-1685453628701-bdf02c353bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
            />
            <ProductCard
              id="3"
              title="billy's yellow chair"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="32999"
              image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80"
            />
            <ProductCard
              id="4"
              title="just a chair"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="21999"
              image="https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />
            <ProductCard
              id="5"
              title="The good sofa"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="78999"
              image="https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />
            <ProductCard
              id="6"
              title="The good sofa"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="78999"
              image="https://images.unsplash.com/photo-1616952391192-d8bc85de60d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            />
            <ProductCard
              id="7"
              title="The good sofa"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="78999"
              image="https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            />
            <ProductCard
              id="8"
              title="The good sofa"
              brand="ModHome"
              description="issa good sofa trust me"
              sellPrice="78999"
              image="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
            />
          </div>
          <div className="home-con-1-space"></div>
          <div className="home-con-idea">
            <h2>Looking for Ideas?</h2>
            <div className="photo-grid">
                <img src="https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="id1"></img>
                <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="id2"></img>
                <img src="https://images.unsplash.com/photo-1616497633466-6c3f7a0cfa93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=392&q=80" alt="id3"></img>
                <img src="https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="id4"></img>
                <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80" alt="id5"></img>
                <img src="https://images.unsplash.com/photo-1584537332456-e34026b30a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="id3"></img>
                <img src="https://images.unsplash.com/photo-1528100111051-2abf86d8bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="id6"></img>
                <img src="https://images.unsplash.com/photo-1597308011529-f634f4cab827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="id7"></img>
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="id8"></img>
                <img src="https://images.unsplash.com/photo-1518010741929-b44e969137d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="id9"></img>
                <img src="https://images.unsplash.com/photo-1560806981-44bbc2c6708c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="id10"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
