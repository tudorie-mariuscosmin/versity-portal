import './services/firebase'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Explore from './pages/Explore'
import AddPost from './pages/AddPost'

import { createHashHistory } from 'history'
import { useDispatch } from 'react-redux'
import { fetchUser } from './store/user/user'
const history = createHashHistory()
export { history }

function App() {
  const dispatch = useDispatch()
  dispatch(fetchUser())

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
