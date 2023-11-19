import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="bg-white min-h-full">
      <div className="flex flex-col container min-w-full min-h-screen">
        <Header />
        <main className="flex-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
