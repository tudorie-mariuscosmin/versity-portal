import './services/firebase'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>

  );
}

export default App;
