import React from 'react';
import AnswerDetails from './AnswerDetails';

const AnswerList = (props, deleteAnswer) => {
    const answers = props.answers
    //Goal: Given an array of answers object (from the props), return answer details for 
    //each individual answer inside the answers array

    //Warning for key: we will add the answer element index and key as one of the properties to answer details
    //React likes to do performance related tasks for lists or anything that uses mapping, which means it will use the index of every element
    //in the list to determine if that item needs to be re-rendered or not; so we provide a key prop to the component that is being rendered out
    return (
        <div>
            {
                answers ? 
                answers.map((a, i) => {
                    return <AnswerDetails
                        key={i} 
                        id={a.id}
                        body={a.body}
                        author={a.author}
                        created_at={a.created_at.toLocaleString()}
                        deleteAnswer={deleteAnswer}
                    />
                })
                :
                null
            }
        </div>
    )
}

export default AnswerList;