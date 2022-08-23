import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((r) => r.json())
    .then((data) => setQuestions(data))
  },[])

  function deleteQuestion (id) {
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions} /> : <QuestionList deleteQuestion={deleteQuestion} setQuestions={setQuestions} questions={questions}/>}
    </main>
  );
}

export default App;
