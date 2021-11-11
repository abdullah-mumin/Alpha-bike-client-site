import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Footer from './Pages/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Pages/contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/products/:productId">
              <Purchase></Purchase>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
