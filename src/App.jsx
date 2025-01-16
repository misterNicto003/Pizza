import "./scss/app.scss";
import Header from "./components/Header";

import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(123);
  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
