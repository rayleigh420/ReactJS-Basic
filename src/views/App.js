import logo from './logo.svg';
import './App.css';
import ListTodo from './Todos/ListTodo';
import MyComponent from './Example/MyComponent.js';
import MyForm from './Example/MyForm.js';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import Login from './login_logout/Login';
import Logout from './login_logout/Logout';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO Apps with React Le Duy
          </p>

          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            {/* <Route path="/todo" exact>
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route> */}
            <Route path="/:name">
              <Logout />
            </Route>
          </Switch>
          {/* <MyComponent /> */}
          {/* <MyForm /> */}
          {/* <ListTodo /> */}
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
