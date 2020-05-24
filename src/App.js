import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './style/App.scss';
import SearchMovies from './components/searchMovies';
import Movie from './components/Movie';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <div className='container'>
          <Route path='/' exact component={SearchMovies} />
          <Route path='/:id' exact component={Movie} />
        </div>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
