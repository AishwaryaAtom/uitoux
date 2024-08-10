import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartReducer.jsx';


const storeToLocalStorage = (props) => {
  return (exe) => {
    return (action) => {
      const result = exe(action);
      localStorage.setItem("redux_store", JSON.stringify(props.getState()));
      return result;
    };
  };
};

const loadFromStorage = () => {
  if (localStorage.getItem("redux_store") !== null) {
    return JSON.parse(localStorage.getItem("redux_store"));
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (defaultMiddlewareFn) => [
    ...defaultMiddlewareFn(),
    storeToLocalStorage,
  ],
  preloadedState: loadFromStorage(),
});

export default store;
