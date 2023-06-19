import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../slice/contentSlice";
import contentById from "../slice/contentById";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    contentById: contentById,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import contentSlice from "../slice/contentSlice";

// const store = configureStore({
//   reducer: {
//     content: contentSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export default store;
