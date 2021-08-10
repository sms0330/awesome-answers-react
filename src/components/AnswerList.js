import React from 'react';
import { AnswerDetails } from './AnswerDetails';

export const AnswerList = ({answers, deleteAnswer}) => {
    //given an array of answers object (from the props), return answer details for each individual answer inside the answers array

    //warning for key: we will add the index and key as one of the properties to answerdetails
    //react likes to do performance related tasks for lists or anything that uses mapping, so it will use the index of every element
    //in the list to determin if that item needs to be re-rendered or nt; so we provide key prop to the component that is being rendered out
    return (
        <div>
            {
                answers.map((a, i) => {
                    return <AnswerDetails
                        key={i} 
                        id={a.id}
                        body={a.body}
                        author={a.author}
                        created_at={a.created_at}
                        deleteAnswer={deleteAnswer}
                    />
                })
            }
        </div>
    )
}