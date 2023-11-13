import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Paint from "./pages/Paint";
import { useState } from "react";

function App() {
  const [searchCard, setSearchCard]: [string, (searchCard: string) => void] =
    useState("");

  return (
    <>
      <div className=" w-full">
        <BrowserRouter>
          <Header setSearchCard={setSearchCard} searchCard={searchCard} />
          <Routes>
            <Route path="/" element={<Home searchCard={searchCard} />} />
            <Route path="/paint/:id" element={<Paint />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
