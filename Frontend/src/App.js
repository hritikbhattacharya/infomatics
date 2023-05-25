import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import NavBar from "./components/navbar/NavBar";
import News from "./components/news/News";
import Info from "./components/search/Info";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (
    !loading && (
      <>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/news" element={<News />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </>
    )
  );
}

export default App;
