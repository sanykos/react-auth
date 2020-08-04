import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './components/Login/Login'
import UsersList from './components/UsersList/UsersList'
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import Menu from './components/Navigation/Menu'


class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/login" component={Login} exact={false}/>
        <Route path="/" component={Home} exact={true}/>
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={UsersList} exact={false}/>
            <Route path="/logout" component={Logout} exact={false}/>
            <Redirect to="/" />
          </Switch>
        )
    }

    return(
      <div className="container">
          <Menu isAuthenticated={this.props.isAuthenticated}/>
           {routes}
         
      </div>
    )
  }

}

function mapStateToProps(state) {
 //console.log(state.login.token)
  return {
    isAuthenticated: !!state.login.token
  }
}

export default withRouter(connect(mapStateToProps)(App))


