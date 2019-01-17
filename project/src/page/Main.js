import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import JSX from '../components/Jsx';
import FormListConditionalRendering from '../components/FormListConditionalRendering';
import LifeCycleMethods from '../components/LifeCycleMethods';
import Components from '../components/Components';
import Props from '../components/Props';
import State from '../components/State';
import Events from '../components/Events';
import Challenge from '../components/Challenge';


// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/jsx' component={JSX}/>
      <Route path="/state" component={State}/>
      <Route path='/components' component={Components}/>
      <Route path='/props' component={Props}/>
      <Route path='/formListConditionRendering' component={FormListConditionalRendering}/>
      <Route path='/lifeCycleMethods' component={LifeCycleMethods}/>
      <Route path='/events' component={Events}/>
      <Route path='/challenge' component={Challenge}/>
    </Switch>
  </main>
)

export default Main