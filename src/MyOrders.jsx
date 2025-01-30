// import React from "react";
// import { useSelector } from "react-redux";
// import "./MyOrders.css"; // Import CSS file

// const MyOrders = () => {

//   const checkOutItems = useSelector((state) => state.cart.chaeckOutItems);
//   console.log("order",checkOutItems)

// //   Calculate total price
//   const totalAmount = checkOutItems.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);

//   // Get current date and time
//   const orderDate = new Date().toLocaleString();

//   return (
//     <div className="orders-container">
//       <h1 className="orders-title">My Orders</h1>
// {checkOutItems.length === 0 ? (
//         <p className="no-orders">No orders yet.</p>
//       ) : ( 
//         <div className="order-details">
//           <p className="order-date">Order Date: {orderDate}</p>
//           <table className="orders-table">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {checkOutItems.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.quantity}</td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                 </tr>
//               ))} 
//             </tbody>
//           </table>
//           <h2 className="total-amount">Total: ${totalAmount.toFixed(2)}</h2> 
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;

import React from "react";
import { useSelector } from "react-redux";
import "./MyOrders.css"; // Import CSS file

const MyOrders = () => {
  const checkOutItems = useSelector((state) => state.cart.chaeckOutItems);
  console.log("order", checkOutItems);

  // Calculate total price
  const totalAmount = checkOutItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Get current date and time
  const orderDate = new Date().toLocaleString();

  return (
    <div className="orders-container">
      <h1 className="orders-title">My Orders</h1>
      {checkOutItems.length === 0 ? (
        <p className="no-orders">No orders yet.</p>
      ) : (
        <div className="order-details">
          <p className="order-date">Order Date: {orderDate}</p>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {checkOutItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.images[0]}                                              
                      alt={item.name}
                      className="product-image"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="total-amount">Total: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
