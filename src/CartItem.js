const cartItems = [
  // {
  //   id: "rec1JZlfCIBOPdcT2",
  //   title: "Samsung Galaxy S8",
  //   price: "399.99",
  //   img: "https://images2.imgbox.com/c2/14/zedmXgs6_o.png",
  //   amount: 1,
  // },
  {
    id: "recB6qcHPxb62YJ75",
    title: "google pixel",
    price: "499.99",
    img: "https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png",
    amount: 1,
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    title: "Xiaomi Redmi Note 2",
    price: "699.99",
    img: "https://images2.imgbox.com/4f/3d/WN3GvciF_o.png",
    amount: 1,
  },
  {
    id: "recwTo160XST3PIoW",
    title: "Samsung Galaxy S7",
    price: "599.99 ",
    img: "https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png",
    amount: 1,
  },
];
export default cartItems;

// import React from "react";
// import { useGlobalContext } from "./context";
// const CartItem = ({ id, img, title, price, amount }) => {
//   const { increase, decrease } = useGlobalContext();

//   return (
//     <article className="cart-item">
//       <img src={img} alt={title} />
//       <div>
//         <h4>{title}</h4>
//         <h4 className="item-price">${price}</h4>
//         {/* remove button */}
//         <button
//           className="remove-btn"
//           onClick={() => console.log("remove item")}
//         >
//           remove
//         </button>
//       </div>
//       <div>
//         {/* increase amount */}
//         <button className="amount-btn" onClick={() => increase(id)}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
//           </svg>
//         </button>
//         {/* amount */}
//         <p className="amount">{amount}</p>
//         {/* decrease amount */}
//         <button className="amount-btn" onClick={() => decrease(id)}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//           </svg>
//         </button>
//       </div>
//     </article>
//   );
// };

// export default CartItem;
