import './App.scss';
import GymsContainer from './containers/GymsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <GymsContainer />
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      
    </div>
  );
}

export default App;
