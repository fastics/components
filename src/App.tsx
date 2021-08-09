import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link to="/toto">Learn React</Link>
    </header>
  </div>
);

const Toto = () => <h1>Toto</h1>;

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/toto" component={Toto} />
    </Switch>
  );
}

export default App;
