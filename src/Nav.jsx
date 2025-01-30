// // import React, { useState } from 'react'
// // import { Link } from "react-router-dom";
// // import "./Nav.css"
// // import Cart from './Cart';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { toggleCart } from "../src/redux/cartSlice";

// // function Nav() {
// //   const [cartFl, setCartFl] = useState(false)
// //   console.log("check",cartFl)
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const dispatch = useDispatch();

// //   return (
// //     <>
// //     <nav className="navbar">
// //       <div className="left">
// //         <h2 className="logo">Shopi</h2>
// //         <ul className="nav-links">
// //           <li><Link to="/">All</Link></li>
// //           <li><Link to="/clothes">Clothes</Link></li>
// //           <li><Link to="/electronics">Electronics</Link></li>
// //           <li><Link to="/furnitures">Furnitures</Link></li>
// //           <li><Link to="/toys">Toys</Link></li>
// //         </ul>
// //       </div>
// //       <div className="right">
// //         <span className="email">userintheapp@test.com</span>
// //         <Link to="/orders">My Orders</Link>
// //         <Link to="/account">My Account</Link>

// //       </div>
// //     </nav>

// //     {cartFl&&<Cart></Cart>}
// //     </>

// //   )
// // }

// // export default Nav



// import React from 'react';
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleCart } from "../src/redux/cartSlice";
// import Cart from './Cart';
// import "./Nav.css";

// const Nav = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <nav className="navbar">
//         <div className="left">
//           <h2 className="logo">Vin</h2>
//           <ul className="nav-links">
//             <li><Link to="/">All</Link></li>
//             <li><Link to="/clothes">Clothes</Link></li>
//             <li><Link to="/electronics">Electronics</Link></li>
//             <li><Link to="/furnitures">Furnitures</Link></li>
//             <li><Link to="/toys">Toys</Link></li>
//           </ul>
//         </div>
//         <div className="right">
//           <span className="email">vinaypandey0801@gmail.com</span>
//           <Link to="/orders">My Orders</Link>
//           <Link to="/account">My Account</Link>
//           <button className="cart-icon" onClick={() => dispatch(toggleCart())}>
//             🛒 {cartItems.length}
//           </button>
//           <Link to="/logout">LogOut</Link>
//         </div>
//       </nav>
//       <Cart />
//     </>
//   );
// };

// export default Nav;


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../src/redux/cartSlice";
import Cart from './Cart';
import "./Nav.css";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h2 className="logo">Vin</h2>
          <span className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>All</Link></li>
          <li><Link to="/clothes" onClick={() => setMenuOpen(false)}>Clothes</Link></li>
          <li><Link to="/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link></li>
          <li><Link to="/furnitures" onClick={() => setMenuOpen(false)}>Furnitures</Link></li>
          <li><Link to="/toys" onClick={() => setMenuOpen(false)}>Toys</Link></li>
        </ul>

        <div className="right">
          <span className="email">vinaypandey0801@gmail.com</span>
          <Link to="/orders">My Orders</Link>
          <Link to="/account">My Account</Link>
          <button className="cart-icon" onClick={() => dispatch(toggleCart())}>
            🛒 {cartItems.length}
          </button>
          <Link to="/logout">LogOut</Link>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default Nav;
