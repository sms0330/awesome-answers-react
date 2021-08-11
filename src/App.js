import React, {Component} from 'react';
import './App.css';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';
// import CurrentDateTime from './components/CurrentDateTime';
import { Session } from './requests'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

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
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then(current_user => {
      this.setState((state) => {
        return {
          user: current_user
        }
      })
    })
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Route exact path='/questions'>
          <QuestionIndexPage />
        </Route>
        <Route path='/questions/:id' component={QuestionShowPage}></Route>
      </BrowserRouter>
    )
  }
}

export default App;