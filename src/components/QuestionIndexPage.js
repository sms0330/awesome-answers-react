import React, { Component} from 'react';
// import questionsIndexData from '../questionsIndexData';
// import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

export class QuestionIndexPage extends Component {

    constructor(props) {
        //if you are using a class component and want to access 'this', must call super(props) in constructor
        super(props)
        this.state = {
            questions: []
        }
        // this.createQuestion = this.createQuestion.bind(this);
        //console.log('Questionindex Component initialized');
    }

    componentDidMount(){
        Question.index()
        .then((questions) => {
            this.setState((state) => {
                return {
                    questions: questions
                }
            })
        })
    }

    // createQuestion(params) {
    //     this.setState((state) => {
    //         return {
    //             //[].concat(state.questions) -> another way to copy an array
    //             questions: [ 
    //                 //spread - it will copy every single element (keys/values from an array) within state.questions into a new array 
    //                 ...state.questions,
    //                 { 
    //                     id: (Math.max(...state.questions.map(q => q.id)) + 1), //find the largest id within an array and add 1 to it
    //                     //Math.max doesn't take in an array as an argument; takes in a number as paramters so we are using the spread synatax on the original questions array 
    //                     title:params.title,
    //                     body:params.body
    //                     //...params
    //                 }
    //             ]
    //         }
    //     })
    // }

    deleteQuestion(id) {
        //To change state in a React component, you MUST use the setState method(this.setState)
        //it takes an object that gets merged in the current state at React's convenience
        //the properties in setState() replace the same properties in the current state
        //This happens asynchronously and will eventually trigger an update to the DOM IF there is a change

        //setState() accepts a callback argument which receives the latest state 
        //i.e. the cb function always receives the latest state as the argument
        //the return value of this callback function is merged or overwritten into the current state

        //Key rules: when changing state, we never want to mutate data as React depends on new objects to determine what should be rendered/re-rendered
        //this.state.questions[0] = null; -> don't do this

        //lets overwrite the current questions state
        this.setState((state) => {
            return  {
                questions: state.questions.filter(q => q.id !== id) //questions in this.state would be different than questions in this.setState()
                //the above new questions object gets merged with the original this.state (new state has the same key => it will take the value of the new key instead of the old)
            }
        })
    }

    render() {
        //console.log('Question index page rendered');
        return (
            <main>
                {
                    this.state.questions.map(q => {
                        return(
                            <div key={q.id}>
                                <h1>{q.id} - {q.title}</h1>
                                <button onClick={() => this.deleteQuestion(q.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </main>
        )
    }
}