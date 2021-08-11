import React, { Component} from 'react';
import questionsIndexData from '../questionsIndexData';
import NewQuestionForm from './NewQuestionForm';

export class QuestionIndexPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: questionsIndexData
        }

        //Anytime that we are passing down methods that uses this you have to bind this to that method
        this.createQuestion = this.createQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        console.log('Questionindex Component initialized');
    }

    createQuestion(params) {
        this.setState((state) => {
            return {
                questions: [ //spread over an existing questions array (faster to merge elements this way)
                    //spread - it will copy every element (key/values from an array) within state.questions into a new array
                    
                    { 
                        id: (Math.max(...state.questions.map(q => q.id)) + 1), //find the largest id within an array and add to it
                        title: params.title,
                        body: params.body
                        //...params
                    },
                    ...state.questions
                ]
                //[].concat(state.questions) -> another way to copy an array
            }
        })
    }

    deleteQuestion(id) {

        //To change state in a React component, you MUST use the setState(method)
        //it takes an object that gets merged in the current state at React's convenience
        //the properties in setState() replace the same properties in the current state
        //This happens asynchronously and will eventually trigger an update to the DOM IF there is a change

        //setState accepts a callback argument which receives the latest state 
        //the return value of this callback function is merged or overwritten into this current state
        // this.setState((state) => {

        //     return state.questions.filter(q => q.id != id);
        // })
        //this.state.questions[0] = null;

        this.setState((state) => {
            return  {
                questions: this.state.questions.filter(q => q.id != id)
            }
        })
        // this.setState({
        //     questions: this.state.questions.filter(q => q.id != id)
        // });

    }


    render() {
        console.log('Question index page rendered');
        return (
            <main>
                <NewQuestionForm createQuestion={this.createQuestion} />
                {
                    this.state.questions.map(q => {
                        return(
                            <div key={q.id}>
                                <h1>{q.id} - {q.title}</h1>
                                {/* <button onClick={() => console.log(`${q.id} was clicked!`)}>Delete</button> */}
                                <button onClick={() => this.deleteQuestion(q.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </main>
        )
    }
}