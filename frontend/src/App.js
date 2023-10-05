import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/home";
import {Navbar} from "./components/navbar";
import './App.css'

function App() {
  
  return (
    <>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
            <Navbar/>
        </Router> 
    </>
  )
}

export default App