import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import { Root } from "./root.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Home } from "./pages/Home.jsx";
import { UserPage } from "./pages/UserPage.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./api-redux/reducers-actions/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <UserPage />,
      },
    ],
  },
]);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
