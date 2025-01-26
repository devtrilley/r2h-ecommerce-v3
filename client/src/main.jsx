import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* We wrap BrowserRouter around our app component to ensure our routing works globally in our app. <Link>s in header for example. Without this, <Header> and <Footer> wont render */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
