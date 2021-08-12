import React from 'react'
import NewQuestionForm from './NewQuestionForm'
import { Question } from '../requests';

const NewQuestionPage = (props) => {
    //Because NewQuestionPage is being rendered by a Route component provided by react-router-dom
    //it will receive the history, location, and match properties
    function createQuestion(params){
        Question.create(params)
        .then((question) => {
            const id = question.id;
            props.history.push(`/questions/${id}`);
        })
    }

    return(
        <div>
            < NewQuestionForm createQuestion={createQuestion} />
        </div>
    )
}

export default NewQuestionPage;