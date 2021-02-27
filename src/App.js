import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Character from './pages/Character';
import Search from './components/Search';
import Home from './pages/Home';
import Pagina404 from './pages/NotFound404';
import './styles/global.css';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character" component={Character} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/search" component={Search} />
        <Route path="" component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
