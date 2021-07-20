import Login from './components/Login'
import Scoreboard from './components/Scoreboard'
import Dashboard from './components/Dashboard'
import SignInSide from './components/SignInSide' 
import {BrowserRouter as Router , Route} from  'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

const App = ()=>{
  return (
    <Router>
      <Route path='/login' exact component={SignInSide}/>
      <Route path='/login1' exact component={Login}/>
      <ProtectedRoute path='/' exact component={Dashboard}/>
      <ProtectedRoute path='/scoreboard' exact component={Scoreboard}/>
    </Router>
  );
}

export default App

