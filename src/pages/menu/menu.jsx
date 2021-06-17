import React from "react";
import ReactDOM from "react-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <main className="menu-main">
      <section className="menu">
        <div className="menu-top">
          <h2 className="menu-h2">Menu</h2>
        </div>
        <div className="menu-bottom">
          <div className="menu-section-left">
            <div className="menu-div">
              <h3 className="menu-h3">Margherita</h3>
              <p className="menu-p">Tomato sauce, fresh mozzarella and basil</p>
            </div>
            <div className="menu-div">
              <h3 className="menu-h3">Diavola</h3>
              <p className="menu-p">
                Tomato sauce, fresh mozzarella, hot Calabrian sausage, sheeps milk ricotta, italian spinach and garlic
              </p>
            </div>
            <div className="menu-div">
              <h3 className="menu-h3">Primavera</h3>
              <p className="menu-p">
                Fresh mozzarella, baked tomato, basil, zucchini, eggplant, olives, pecorino and pest
              </p>
            </div>
            <div className="menu-div">
              <h3 className="menu-h3">Capricciosa</h3>
              <p className="menu-p">Tomato sauce, fresh mozzarella, cooked ham, mushrooms, artichoke and oregano</p>
            </div>
            <div className="menu-div">
              <h3 className="menu-h3">Maremont</h3>
              <p className="menu-p">Tomatosauce, fresh mozzarella, wild prawns, salame calabrese, pecorino and chili</p>
            </div>
            <div className="menu-div">
              <h3 className="menu-h3">Gunacia</h3>
              <p className="menu-p">Fresh mozzarella, guanciale, fennel, pecorino, chili and parsley</p>
            </div>
          </div>
          <div className="menu-section-right">
            <p className="price-p">250,-</p>
            <p className="price-p">250,-</p>
            <p className="price-p">250,-</p>
            <p className="price-p">250,-</p>
            <p className="price-p">250,-</p>
            <p className="price-p">250,-</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
