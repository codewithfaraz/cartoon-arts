import React from "react";
import { Header } from "./components/Header";
import { LanguageSelector } from "./components/LanguageSelector";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Roadmap } from "./components/Roadmap";
import { Tokenomics } from "./components/Tokenomics";
import { FAQ } from "./components/FAQ";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13163E] to-[#1E1E2E] text-white">
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-md bg-[#13163E]">
        <LanguageSelector />
        <Header />
      </div>
      <main className="pt-32">
        <Hero />
        <About />
        <Roadmap />
        <Tokenomics />
        <FAQ />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
