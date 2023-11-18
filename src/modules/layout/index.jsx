import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../main";

function Layout() {
  return (
    <div className="container max-w-full min-h-screen bg-slate-300">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
