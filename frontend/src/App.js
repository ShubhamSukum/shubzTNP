import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Home } from "./pages/home";
import { Tabular } from "./pages/tabular";
import { FeedXP } from "./pages/feedXP";

//
import { C2020 } from "./pages/C2020";
import { C2020ppo } from "./pages/C2020ppo";
//
import { C2021 } from "./pages/C2021";
import { C2021ppo } from "./pages/C2021ppo";
//
import { C2022 } from "./pages/C2022";
import { C2022ppo } from "./pages/C2022ppo";
//
import { C2023 } from "./pages/C2023";

// Visualize
import { V2020 } from "./visuals/V2020";
import { V2021 } from "./visuals/V2021";
import { V2022 } from "./visuals/V2022";
import { V2023 } from "./visuals/V2023";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabular" element={<Tabular />} />
          <Route path="/feedXP" element={<FeedXP />} />

          <Route path="/company2020" element={<C2020 />} />
          <Route path="/company2020PPO" element={<C2020ppo />} />

          <Route path="/company2021" element={<C2021 />} />
          <Route path="/company2021PPO" element={<C2021ppo />} />

          <Route path="/company2022" element={<C2022 />} />
          <Route path="/company2022PPO" element={<C2022ppo />} />

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
