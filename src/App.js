import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <div class="app__body">
          {/* SideBar */}
          <Sidebar />
          {/* Feed*/}
          {/* Widgets*/}
        </div>
      </div>
    </>
  );
}

export default App;
