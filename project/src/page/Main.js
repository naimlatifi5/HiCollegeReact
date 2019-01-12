import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import JSX from '../components/Jsx';
import FormListConditionalRendering from '../components/FormListConditionalRendering';
import Props from '../components/Props';
import ContainerComponents from '../components/ContainersComponents';
import StateLifeCycleEvents from '../components/StateLifeCycleEvents';


// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/jsx' component={JSX}/>
      <Route path='/formListConditionRendering' component={FormListConditionalRendering}/>
      <Route path='/props' component={Props}/>
      <Route path='/containerComponents' component={ContainerComponents}/>
      <Route path='/stateLifeCyckleEvents' component={StateLifeCycleEvents}/>
    </Switch>
  </main>
)

export default Main