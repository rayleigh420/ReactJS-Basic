import logo from './logo.svg';
import './App.css';
import ListTodo from './Todos/ListTodo';
import MyComponent from './Example/MyComponent.js';
import MyForm from './Example/MyForm.js';
import Home from './Example/Home';
import Nav from './Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO Apps with React Le Duy
          </p>

          <Switch>
            <Router path="/" exact>
              <Home />
            </Router>
            <Router path="/todo">
              <ListTodo />
            </Router>
            <Router path="/about">
              <MyComponent />
            </Router>
          </Switch>
          {/* <MyComponent /> */}
          {/* <MyForm /> */}
          {/* <ListTodo /> */}
        </header>
      </div>
    </Router>

  );
}

export default App;
