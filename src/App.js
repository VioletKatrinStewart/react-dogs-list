import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Edit from './Views/Edit/Edit';
import Admin from './Views/Admin/Admin';
import Dog from './Views/Dog/Dog';
import Dogs from './Views/Dogs/Dogs';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/admin" exact>
          Admin
        </NavLink>
      </header>

      <Switch>
        <Route path="/" exact component={Dogs} />
        <Route path="/dogs" exact component={Dogs} />
        <Route path="/dogs/:id" component={Dog} />
        <Route path="/admin" component={Admin} />
        <Route path="/dogs/:id/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
