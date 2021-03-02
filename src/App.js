/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';

import Header from './components/Header';
import Character from './pages/Character';
import Characters from './pages/Characters';
import Search from './components/Search';
import Home from './pages/Home';
import Pagina404 from './pages/NotFound404';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import { useDarkMode } from './utils/useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/characters" component={Characters} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/search" component={Search} />
          <Route path="" component={Pagina404} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
