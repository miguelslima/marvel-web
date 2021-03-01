import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import Character from './pages/Character';
import Characters from './pages/Characters';
import Search from './components/Search';
import Home from './pages/Home';
import Pagina404 from './pages/NotFound404';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters" component={Characters} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/search" component={Search} />
        <Route path="" component={Pagina404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
