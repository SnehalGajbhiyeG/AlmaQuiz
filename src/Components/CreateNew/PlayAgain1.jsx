import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlayAgain1({ quizName, questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerButtonClick = (selectedAnswer) => {
        const currentQuestionObj = questions[currentQuestion];
        if (selectedAnswer === currentQuestionObj.correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleResetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <Container className="p-2">
            {showScore ? (
                <div className="score-section">
                    <Card className="text-center" border="secondary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://clipground.com/images/congratulations-clipart-funny-7.jpg" />
                        <Card.Body>
                            <Card.Title>You scored {score} out of {questions.length}</Card.Title>
                            <Card.Text>
                                Quiz Name: {quizName}
                            </Card.Text>
                            <Button variant="primary" onClick={handleResetQuiz}>Play Again</Button>
                            <Button className="m-2" href='/'>Return to Home Page</Button>
                        </Card.Body>
                    </Card>
                </div>
            ) : (
                <div className="question-section">
                    <div className="question-count">
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <Card>
                        <Card.Body> {questions[currentQuestion].questionText}</Card.Body>
                    </Card>
                    <div className="answer-options">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <Button
                                variant="primary"
                                className="m-3"
                                key={index}
                                onClick={() => handleAnswerButtonClick(answerOption)}
                            >
                                {answerOption}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    );
}

export default PlayAgain1;
