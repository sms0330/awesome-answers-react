export const AnswerDetails = ({body, author, created_at, id, deleteAnswer}) => {
  return(
    <div>
      <p>{body}</p>
      <p>By: {author.first_name} {author.last_name}</p>
      <p>
        <strong>Created at: </strong> {created_at.toLocaleString()}
      </p>
      {/* <button onClick={() => console.log(id)}>Delete</button> */}
      <button onClick={() => deleteAnswer(id)}>Delete</button>
      {/* couuld get an error of setState is undefined */}
    </div>
  )
}