
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
