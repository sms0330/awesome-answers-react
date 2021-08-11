import React from 'react';

export const QuestionDetails = ({title, body, author, view_count, created_at, updated_at}) => {
    const randomNumber = 500 + 1000;
  
    //const randomDiv = <div>alksdjflasj</div>;
  
    //return jsx...with jsx we can write html tags in our js

    return (
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>By: { author ? author.full_name : null } | {randomNumber}</p>
          <p>
            <small>Seen {view_count}</small>
            <small>Created at {created_at.toLocaleString()}</small>
          </p>
        </div>
    )
}

//Below are other options on how to export a component within a module

//export default QuestionDetails;

/*module.exports = {
    AnswerDetails: AnswerDetails,
    QuestionDetails: QuestionDetails
}*/
