import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import CharactersList from "./components/Characters/CharactersList";
import CharactersDetail from "./components/Characters/CharactersDetail";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/characters' component={CharactersList}/>
    <Route path='/characters/:id' component={CharactersDetail}/>
  </Switch>
);

export default Routes;