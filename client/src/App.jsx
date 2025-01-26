import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />

      {/* Using React Router Dom, we will dynamically render our content for each respective page in the main elements to stick with semantic html */}
      {/* Routes = Container that holds all of our routes */}
      <Routes>
        {/* Route = comp that tells which page component should be rendered depending on the URL path we're on/naviagted to */}
        {/* "element" is the comp we will render. "path" is where that page comp should render */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
