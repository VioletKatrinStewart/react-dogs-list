import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Edit from './Views/Edit/Edit';
import Admin from './Views/Admin/Admin';
import Dog from './Views/Dog/Dog';
import Dogs from './Views/Dogs/Dogs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dogs} />
        <Route path="/dogs" exact component={Dogs} />
        <Route path="/dogs/:id" exact component={Dog} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/dogs/:id/edit" exact component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
