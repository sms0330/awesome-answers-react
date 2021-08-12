import React, {Component} from 'react';
import './App.css';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';
// import CurrentDateTime from './components/CurrentDateTime';
// import { Session } from './requests'
import { User } from './requests'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';

// function App() {
//   return (
//     <div className="App">
//       <QuestionShowPage /> 
//       <QuestionIndexPage />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }
  }

  //Hacky Sign in with mock data passed as params
  componentDidMount () {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      if(user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/>
        <Switch>
          <Route 
          exact path='/sign_in'
          //Anytime we want to render a component that requires some props,
          // and that component is being rendered by a Route component
          //then the way to pass props is to use the "render" property
          //It takes a function as an argument and the function returns the component
          //with the props passed to it. "routeProps" represents all the routing props
          //Make sure to pass them to the component as well
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />}
          />
          <Route exact path='/questions'>
            <QuestionIndexPage />
          </Route>
          <Route path='/questions/new' component={NewQuestionPage}></Route>
          <Route path='/questions/:id' component={QuestionShowPage}></Route>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;