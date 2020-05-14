import React from 'react';
import { Route } from 'react-router-dom'

import  Home  from './pages/Home';

export const App = () => {
 
  return (
    <>
    <Route exact path="/" render={() => <Home /> } />
    </>
  );
}
