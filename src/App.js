import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import Pagina404 from './paginas/Pagina404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="" component={Pagina404} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
