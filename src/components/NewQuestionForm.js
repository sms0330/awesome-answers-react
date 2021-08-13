import React from 'react';
import FormErrors from './FormErrors'

//functional component
const NewQuestionForm = (props) => {

    const handleSubmit = (event) => {
       event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get('title'),
            body: formData.get('body')
        }

        props.createQuestion(params);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input name='title' id='title' ></input>
                <FormErrors forField="title" errors={props.errors} />
                <br/>
            </div>
            <div>
                <label htmlFor='body'>Body</label>
                <br />
                <textarea name='body' id='body' ></textarea>
                <FormErrors forField="body" errors={props.errors} />
                <br/>
            </div>
            <div>
                <input type='submit' value='submit' />
            </div>
        </form>    
    )
}

export default NewQuestionForm;