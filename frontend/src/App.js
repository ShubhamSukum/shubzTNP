import './App.css'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/navbar";

import {Home} from "./pages/home";

// 
import {C2020} from "./pages/C2020";
import {C2020ppo} from "./pages/C2020ppo";
// 
import {C2021} from "./pages/C2021";
import {C2021ppo} from "./pages/C2021ppo";
// 
import {C2022} from "./pages/C2022";
import {C2022ppo} from "./pages/C2022ppo";
// 

function App() {
  
  return (
    <>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>

              <Route path='/company2020' element={<C2020/>}/>
              <Route path='/company2020PPO' element={<C2020ppo/>}/>

              <Route path='/company2021' element={<C2021/>}/>
              <Route path='/company2021PPO' element={<C2021ppo/>}/>

              <Route path='/company2022' element={<C2022/>}/>
              <Route path='/company2022PPO' element={<C2022ppo/>}/>

            </Routes>
            <Navbar/>
        </Router> 
    </>
  )
}

export default App