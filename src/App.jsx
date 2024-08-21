import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";

function App() {
  return (
    <>
      <Header />
      <main className="circular">
        <Hero />
        <Clients />
        <Services />
        <Destinations />
      </main>
    </>
  );
}

export default App;
