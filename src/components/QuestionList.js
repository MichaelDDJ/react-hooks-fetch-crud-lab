import React, {useEffect} from "react";
import QuestionItem from './QuestionItem';

function QuestionList({questions, deleteQuestion}) {
  console.log(questions)

  let quizQuestions = questions.map((question) => {
    return <QuestionItem key={question.id} question={question}  deleteQuestion={deleteQuestion} />
  })
  

  if(!quizQuestions) {
    return <p>Loading</p>
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizQuestions}</ul>
    </section>
  );
}

export default QuestionList;