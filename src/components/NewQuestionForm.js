import React from 'react';

//functional component
const NewQuestionForm = ({createQuestion}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
         const formData = new FormData(event.currentTarget);
         const params = {
             title: formData.get('title'),
             body: formData.get('body')
         }
         console.log("params : " + params.title);
         createQuestion(params);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input name='title' id='title' ></input>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br />
                <textarea name='body' id='body' ></textarea>
            </div>
            <div>
                <input type='submit' value='submit' ></input>
            </div>
        </form>    
    )
}

export default NewQuestionForm;