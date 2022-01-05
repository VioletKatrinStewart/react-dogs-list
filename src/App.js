import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import DogDetail from './Components/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dogs/:id" component={DogDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
