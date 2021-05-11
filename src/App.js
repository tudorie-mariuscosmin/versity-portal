import './services/firebase'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import Navigation from './components/Navigation'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Explore from './pages/Explore'
import AddPost from './pages/AddPost'


function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path="/add" exact component={AddPost} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/settings" exact component={Settings} />
        <PrivateRoute path="/explore" exact component={Explore} />
      </Switch>
    </Router>

  );
}

export default App;
