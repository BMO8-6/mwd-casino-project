import HomeApp from "./Home/HomeApp.js";
import Blackjack from "./Blackjack/BlackjackApp.js";
import Roulette from "./Roulette/RouletteApp.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
};

export default Components;