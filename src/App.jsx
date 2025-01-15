import "./scss/app.scss";
import Header from "./components/Header";

import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
