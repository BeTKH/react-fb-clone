import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <div class="app__body">
          {/* SideBar */}
          <Sidebar />
          {/* Feed*/}
          <Feed />

          {/* Widgets*/}
          <Widgets />
        </div>
      </div>
    </>
  );
}

export default App;
