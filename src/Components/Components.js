import HomeApp from "./Home/HomeApp.js";
import Blackjack from "./Blackjack/BlackjackApp.js";
import Roulette from "./Roulette/RouletteApp.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;