import React, { useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";

import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialstate = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getData = async () => {
    dispatch({ type: "LOADING" });
    const response = await axios.get(url);
    const data = await response.data;
    dispatch({ type: "DISPLAY_ITEM", payload: data });
  };

  useEffect(() => {
    getData();
  }, []);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
