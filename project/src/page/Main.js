import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import MainJSX from '../components/JSX/Main'
import ListConditionalRendering from '../components/ListConditionalRendering/Main'
import Components from '../components/Components/Main'
import Props from '../components/Props/Main'
import State from '../components/State/Main'
import EventsForms from '../components/EventsForms/Main'
import Challenge from '../components/Challenges/Main'
import Hooks from '../components/hooks/Main'
import Hooks10 from '../components/allHooks/hooks/Main'

// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/jsx" component={MainJSX} />
      <Route path="/components" component={Components} />
      <Route path="/state" component={State} />
      <Route path="/props" component={Props} />
      <Route path="/eventsForms" component={EventsForms} />
      <Route
        path="/listConditionRendering"
        component={ListConditionalRendering}
      />
      <Route path="/challenges" component={Challenge} />
      <Route path="/hooks" component={Hooks} />
      <Route path="/Hooks10" component={Hooks10} />
    </Switch>
  </main>
)

export default Main
