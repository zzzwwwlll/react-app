import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './layout/login/login'
import Register from './layout/login/register'
import Home from './layout/home/home'
import My from './layout/my/my'


function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/my" component={My} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <Redirect to={"/login"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App
