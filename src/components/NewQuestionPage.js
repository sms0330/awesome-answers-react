import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm'
import { Question } from '../requests';

class NewQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: [] };
        this.createQuestion = this.createQuestion.bind(this)
    }
    //Because NewQuestionPage is being rendered by a Route component provided by react-router-dom
    //it will receive the history, location, and match properties
    createQuestion(params){
        console.log(`Params: ${params.title} ${params.body}`)
        Question.create(params)
        .then((question) => {
            console.log(`question: ${question.errors}`)
            if (question.errors){
                console.log(`QuestionErrors: ${question.errors}`)
                this.setState({ errors: question.errors })
            } else {
                const id = question.id;
                this.props.history.push(`/questions/${id}`);
            }
        })
    }
    render(){
        return(
            <div>
                < NewQuestionForm createQuestion={this.createQuestion} errors={this.state.errors} />
            </div>
        )
    }
}

export default NewQuestionPage;


