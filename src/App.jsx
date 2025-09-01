import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Hero from "./assets/sections/Hero";



function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
