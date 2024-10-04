import "./App.css";
import PasTriangle from "./PascalScreen";
import { useTheme } from "./component/context/UseContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Animation from "./component/Animation";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pascal" element={<PasTriangle />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
        <div
          className="circle"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
      </Router>
    </div>
  );
}

export default App;
