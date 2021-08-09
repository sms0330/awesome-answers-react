import React from 'react';
import {QuestionDetails} from './QuestionDetails';
import { AnswerDetails } from './AnswerDetails';
import {AnswerList} from './AnswerList';

const QuestionShowPage = () => {
    return(
      <main>
        <QuestionDetails 
          title="What is your fav color?"
          body="red green blue"
          author={{full_name: "jon snow"}}
          view_count={35}
          created_at={new Date()}
          updated_at={new Date()}
        />
        <AnswerDetails 
          body="blue"
          author={{full_name: "Sky k"}}
          created_at={new Date()}
        />
        <AnswerList
          answers= {[
              {
                  body: 'blue',
                  author: {
                      full_name: 'Steve jobs'
                  },
                  created_at: new Date()
              },
              {
                body: 'red',
                author: {
                    full_name: 'Sky k'
                },
                created_at: new Date()
            },
            {
                body: 'green',
                author: {
                    full_name: 'Anson'
                },
                created_at: new Date()
            }
          ]}
        />
      </main>
    )
}

export default QuestionShowPage;