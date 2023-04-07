import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

const App = () => {
  return (
    <div className="bg-primary-1 min-h-screen w-full text-white">
      <Navbar />
      <Header />
      <Features />
      <StayProductive />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
