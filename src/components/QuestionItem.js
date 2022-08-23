import React, {useEffect} from "react";

function QuestionItem({ question, deleteQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete () {
    fetch('http://localhost:4000/questions/' + id, {method: 'DELETE'})
    .then(() => deleteQuestion(id))
  }

  function handleChange (e) {
    fetch('http://localhost:4000/questions/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({correctIndex: parseInt(e)})
    })
    .then(r => r.json)
    .then(data => console.log(data))
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={e => handleChange(e.target.value)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
