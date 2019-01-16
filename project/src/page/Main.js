import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import JSX from '../components/Jsx';
import FormListConditionalRendering from '../components/FormListConditionalRendering';
import ContainerComponents from '../components/ContainersComponents';
import StateLifeCycleEvents from '../components/StateLifeCycleEvents';
import ComponentsProps from '../components/Components&Props';


// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/jsx' component={JSX}/>
      <Route path='/componentsProps' component={ComponentsProps}/>
      <Route path='/formListConditionRendering' component={FormListConditionalRendering}/>
      <Route path='/containerComponents' component={ContainerComponents}/>
      <Route path='/stateLifeCyckleEvents' component={StateLifeCycleEvents}/>
    </Switch>
  </main>
)

export default Main