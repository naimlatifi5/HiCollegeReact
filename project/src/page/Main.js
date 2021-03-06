import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import MainJSX from '../components/JSX/Main';
import ListConditionalRendering from '../components/ListConditionalRendering/Main';
import LifeCycleMethods from '../components/LifeCycleMethods/Main';
import Components from '../components/Components/Main';
import Props from '../components/Props/Main';
import State from '../components/State/Main';
import EventsForms from '../components/EventsForms/Main';
import Challenge from '../components/Challenge/Main';
import Hooks from "../components/hooks/Main"


// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/jsx' component={MainJSX}/>
      <Route path='/components' component={Components}/>
      <Route path="/state" component={State}/>
      <Route path='/props' component={Props}/>
      <Route path='/eventsForms' component={EventsForms}/>
      <Route path='/listConditionRendering' component={ListConditionalRendering}/>
      <Route path='/lifeCycleMethods' component={LifeCycleMethods}/>
      <Route path='/challenge' component={Challenge} />
      <Route path="/hooks" component={Hooks} />
    </Switch>
  </main>
)

export default Main
