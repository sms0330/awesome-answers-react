//import React from 'react';

//props = specific to ALL react components; we use it in order to pass keys to the props object (question show page) via using attributes (keys to the props object)
export const QuestionDetails = ({ title, body, author, view_count, created_at, updated_at }) => {
  const randomNumber = 500 + 1000;

  //const randomDiv = <div>alksdjflasj</div>;

  //return jsx...with jsx we can write html tags in our js
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>
        By: {author.full_name} | {randomNumber}
      </p>
      <p>
        <small>Seen {view_count}</small>
        <small>Last edited {updated_at.toLocaleString()}</small>
      </p>
    </div>
  );
};

// export default QuestionDetails;

/*module.exports = {
    AnswerDetails: AnswerDetails,
    QuestionDetails: QuestionDetails
}*/
