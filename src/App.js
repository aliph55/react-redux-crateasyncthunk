import { useEffect } from "react";
import CartContainer from "./CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItem } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

function App() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItem("random"));
  }, [dispatch]);

  // console.log(cartItems);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

// import React from "react";
// import { useGlobalContext } from "./context";

// // components
// import Navbar from "./Navbar";
// import CartContainer from "./CartContainer";
// // items

// function App() {
//   const { loading } = useGlobalContext();

//   if (loading) {
//     return (
//       <div className="loading">
//         <h1>Loading...</h1>
//       </div>
//     );
//   }
//   return (
//     <main>
//       <Navbar />
//       <CartContainer />
//     </main>
//   );
// }

// export default App;
