import logo from './logo.svg';
import './App.css';
import RoutesList from "./components/api/get/RoutesList";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;
