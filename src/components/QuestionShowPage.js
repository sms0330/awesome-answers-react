import React, {Component} from 'react';
import {QuestionDetails} from './QuestionDetails';
// import { AnswerDetails } from './AnswerDetails';
import {AnswerList} from './AnswerList';
import questionData from '../questionData';

//Class components are essentially functional components with a few extra features (state)
class QuestionShowPage extends Component {
  constructor(props){
    super(props);

    //state vs props
    //state is owned by a component and held in that component and changes over time
    //props is data that is received by a parent component
    this.state = questionData;

    //anytime passing down methods to other child components that use this method you have to bind 'this' to that method
    //accessing the function we want to bind this value to (bind ia method of function)
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  deleteAnswer(id) {
    this.setState((state) => {
      return {
        answers: this.state.answers.filter(a => a.id !== id)
      }
    })
  }

  render() {
    console.log('Question show page rendered');
    //const {title, body, author, view_count, created_at, updated_at} = this.state;
    return(
      <main>
        <QuestionDetails 
          title={this.state.title}
          body={this.state.body}
          author={this.state.author}
          view_count={this.state.view_count}
          created_at={new Date(this.state.created_at)}
          updated_at={new Date(this.state.updated_at)}
        />
        <AnswerList
          answers= {this.state.answers}
          deleteAnswer={this.deleteAnswer}
        />
      </main>
    )
  }
}

export default QuestionShowPage;