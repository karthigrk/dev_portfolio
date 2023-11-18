import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="bg-white">
      <div className="container max-w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
