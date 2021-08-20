import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Upload from './pages/Upload';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/upload' component={Upload} />
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

