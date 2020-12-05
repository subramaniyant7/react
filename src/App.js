import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Dashboard from './Components/dashboard';

const App = () => {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;