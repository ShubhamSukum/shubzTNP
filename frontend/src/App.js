import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";

import { Home } from "./pages/home";
import { Tabular } from "./pages/tabular";
import { FeedXP } from "./FeedXP/feedXP";
import { About } from "./pages/about";

import { C2023 } from "./pages/C2023";

// Visualize
import { V2020 } from "./visuals/V2020";
import { V2021 } from "./visuals/V2021";
import { V2022 } from "./visuals/V2022";
import { V2023 } from "./visuals/V2023";

import {
  Table2020,
  Table2020Ppo,
  Table2021,
  Table2021Ppo,
  Table2022,
  Table2022Ppo,
} from "./pages/table";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabular" element={<Tabular />} />
          <Route path="/feedXP" element={<FeedXP />} />
          <Route path="/about" element={<About />} />

          <Route path="/company2020" element={<Table2020 />} />
          <Route path="/company2020PPO" element={<Table2020Ppo />} />

          <Route path="/company2021" element={<Table2021 />} />
          <Route path="/company2021PPO" element={<Table2021Ppo />} />

          <Route path="/company2022" element={<Table2022 />} />
          <Route path="/company2022PPO" element={<Table2022Ppo />} />

          <Route path="/company2023" element={<C2023 />} />

          {/* Chart JS */}

          <Route path="/visualize2020" element={<V2020 />} />
          <Route path="/visualize2021" element={<V2021 />} />
          <Route path="/visualize2022" element={<V2022 />} />
          <Route path="/visualize2023" element={<V2023 />} />

          {/* Chart JS */}
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
