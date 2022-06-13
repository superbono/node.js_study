import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterAgree from "./views/RegisterPage/RegisterAgree";


function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/regist">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/regist-agree" element={<RegisterAgree />} />
          <Route exact path="/regist" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
