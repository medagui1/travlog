import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
