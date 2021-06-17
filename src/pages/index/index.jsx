import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./index.scss";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("frontpage-image");
    return () => document.body.classList.remove("frontpage-image");
  }, []);

  return (
    <main className="index-main">
      <section className="frontpage-image-section">
        <div className="frontage-text">
          <h1 className="index-h1">Red Pepper Pizza</h1>
          <Link className="order-frontpage-button" to="/order">
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
