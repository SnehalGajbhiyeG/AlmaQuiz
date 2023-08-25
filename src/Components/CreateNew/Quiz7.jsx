import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PlayAgain1 from "./PlayAgain1";

function Quiz7() {
    const [questions, setQuestions] = useState([]);
    const [addingQuestion, setAddingQuestion] = useState(false);
    const [quizName, setQuizName] = useState(null);

    const handleQuestionSubmit = (event) => {
        event.preventDefault();
        const questionText = event.target.question.value;
        const answerOptions = event.target.answerOptions.value.split(',');
        const correctAnswer = event.target.correctAnswer.value;
        const quizName = event.target.quizName.value;

        const newQuestion = {
            questionText,
            answerOptions,
            correctAnswer,
        };

        setQuestions([...questions, newQuestion]);
        setQuizName(quizName);
        setAddingQuestion(true);
        event.target.reset();
    };

    const handlePlayQuiz = (event) => {
        event.preventDefault();
        setAddingQuestion(false);
    };

    return (
        <Container className="p-3">
            <>
                {addingQuestion ? (
                    <Form className="question-form" onSubmit={handleQuestionSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h4>Create New Quiz</h4></Form.Label>
                            <Form.Control type="text" id="quizName" placeholder="Quiz Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add Quiz Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label htmlFor="question">Enter a question:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Question" id="question" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label htmlFor="answerOptions">Enter answer options (comma-separated):</Form.Label>
                            <Form.Control type="text" id="answerOptions" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <label htmlFor="correctAnswer">Enter the correct answer:</label>
                            <Form.Control type="text" placeholder="Enter Correct Answer" id="correctAnswer" required />
                        </Form.Group>

                        <div className="container my-3">
                            <div className="col-md-12 text-center">
                                <button type="submit" onClick={() => window.alert("Question is added")} className="btn btn-success m-1">
                                    Add Question
                                </button>

                                <button onClick={handlePlayQuiz} className="btn btn-dark m-3">
                                    Play Quiz
                                </button>
                            </div>
                        </div>
                    </Form>
                ) : (
                    <>
                        {questions.length > 0 ? (
                            <PlayAgain1 quizName={quizName} questions={questions} />
                        ) : (
                            <div className="container my-3">
                                <div className="col-md-12 text-center">
                                    <button
                                        className="btn btn-primary m-4"
                                        onClick={() => setAddingQuestion(true)}
                                    >
                                        MCQ (Single Correct)
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </>

        </Container>
    );
}

export default Quiz7;
