import React from "react";
import ReactDOM from "react-dom";
import "./order.scss";

const Order = () => {
  return (
    <main className="order-main">
      <section className="form-section">
        <form className="order-form">
          <h2 className="order-h2">Place Your Order Here</h2>
          <fieldset>
            <legend>Contact Info</legend>
            <div className="text-input-group">
              <label htmlFor="name-input">Your Name:</label>
              <input id="name-input" type="text" name="name" size="30" placeholder="Enter your name" />
            </div>
            <div className="text-input-group">
              <label htmlFor="email-input">Adress:</label>
              <input id="email-input" type="text" name="adress" size="30" placeholder="Enter your adress" />
            </div>
            <div className="text-input-group">
              <label htmlFor="phone-input">Phone:</label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                size="30"
                maxLength="10"
                placeholder="Enter your phonenumber"
              />
            </div>
            <div className="text-input-group">
              <label htmlFor="email-input">E-mail:</label>
              <input id="email-input" type="email" name="email" size="30" placeholder="Enter your e-mail adress" />
            </div>
          </fieldset>
          <section className="pizza-and-crust">
            <fieldset>
              <legend>Choose Pizza</legend>
              <select>
                <option>Margherita</option>
                <option>Diavola</option>
                <option>Primavera</option>
                <option>Quattro Fromaggio</option>
                <option>Capricciosa</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Crust</legend>
              <div className="input-group">
                <input type="radio" value="thin" name="crust" id="thin-crust" />
                <label htmlFor="thin-crust">Thin Crust</label>
              </div>
              <div className="input-group">
                <input type="radio" value="thick" name="crust" id="thick-crust" />
                <label htmlFor="thick-crust">Thick Crust</label>
              </div>
            </fieldset>
          </section>
          <fieldset id="extra-toppings">
            <legend>Extra toppings</legend>
            <div className="input-group-wrapper">
              <div className="input-group">
                <input type="checkbox" value="onion" name="onion-topping" id="onion-topping" />
                <label htmlFor="onion-topping">Onion</label>
              </div>
              <div className="input-group">
                <input type="checkbox" value="cheese" name="cheese-topping" id="cheese-topping" />
                <label htmlFor="cheese-topping">Cheese</label>
              </div>
              <div className="input-group">
                <input type="checkbox" value="pepperoni" name="pepperoni-topping" id="pepperoni-topping" />
                <label htmlFor="pepperoni-topping">Pepperoni</label>
              </div>
              <div className="input-group">
                <input type="checkbox" value="ham" name="ham-topping" id="ham-topping" />
                <label htmlFor="ham-topping">Ham</label>
              </div>
              <div className="input-group">
                <input type="checkbox" value="olives" name="olives-topping" id="olives-topping" />
                <label htmlFor="olives-topping">Olives</label>
              </div>
              <div className="input-group">
                <input type="checkbox" value="beef" name="beef-topping" id="beef-topping" />
                <label htmlFor="beef-topping">Beef</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Delivery or Take Away</legend>
            <div className="input-group">
              <input type="radio" value="home" name="delivery" id="home-delivery" />
              <label htmlFor="home-delivery">Delivery</label>
            </div>
            <div className="input-group">
              <input type="radio" value="take-away" name="delivery" id="take-away-delivery" />
              <label htmlFor="take-away-delivery">Take-Away</label>
            </div>
          </fieldset>
          <section className="form-buttons">
            <button type="submit">Order</button>
            <button className="cancel-button">Cancel</button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Order;
