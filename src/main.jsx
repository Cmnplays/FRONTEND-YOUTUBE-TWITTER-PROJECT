import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
