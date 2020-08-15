import React, { Component } from "react";
import Routes from "../Routes/Routes";
import { HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isAuth: false,
      userData: [
        {
          name: "srikanth",
          password: "srikanth"
        },
        {
          name: "admin",
          password: "admin"
        },
        {
          name: "sree",
          password: "sree"
        }
      ],
    loginUser:''  
    };
  }
  // user is logged or Not
  isAuthenticated = () => (this.state.isAuth ? true : false);
  //user validation
  checkUserValidation = ({ name, password }) => {
    let flag = false;
    this.state.userData.forEach(user => {
      if (user.name === name && user.password === password) {
        flag = true;
        this.state.loginUser=user.name
      }
    });
    if (flag) {
      console.log("logged in successfully");
      this.setState({ isAuth: true });
    } else {
      alert("username or password is wrong");
    }
  };
  //*********cart ********* */
  addToCart = payload => {
    // if (!this.isAuthenticated) {
    //   console.log("not logged in");
    // }
    let cart = [...this.state.cart];
    let id = payload.id;
    const item = {
      ...payload,
      qty: 1
    };
    console.log(item);
    let duplicate = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        duplicate = true;
        cart[i].qty++;
      }
    }

    if (duplicate) {
      this.setState({
        cart: cart
      });
    } else {
      this.setState({
        cart: [...cart, item]
      });
    }
  };
  getCartArr = () => {
    return this.state.cart;
  };
  render() {
    let allMethods = {
      isAuthenticate: this.isAuthenticated,
      userValidation: this.checkUserValidation,
      addToCart: this.addToCart,
      getCartArr: this.getCartArr,
      isAuth: this.state.isAuth

    };
    return (
      <div>
        {/* 
          1. routes
          2. nav bar
          3. footer          
      */}
        <HashRouter>
          <NavBar userName={this.state.userName} isAuth={this.state.isAuth}/>
          <Routes app={allMethods} />
          <Footer />
        </HashRouter>
      </div>
    );
  }
}
