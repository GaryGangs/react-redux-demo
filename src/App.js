import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import store from "./redux/store"

import Home from "./components/Home/Home"

const App = props => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="" component={Home} />
        </Switch>
      </Provider>
    </Router>
  )
}
export default App
