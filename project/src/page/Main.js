import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import JSX from '../components/JSX/Jsx';
import FormListConditionalRendering from '../components/FormListConditionalRendering/Main';
import LifeCycleMethods from '../components/LifeCycleMethods/Main';
import Components from '../components/Components/Main';
import Props from '../components/Props/Main';
import State from '../components/State/Main';
import Events from '../components/Events/Main';
import Challenge from '../components/Challenge/Main';


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
      <Route path='/events' component={Events}/>
      <Route path='/lifeCycleMethods' component={LifeCycleMethods}/>
      <Route path='/challenge' component={Challenge}/>
    </Switch>
  </main>
)

export default Main