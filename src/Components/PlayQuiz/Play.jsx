import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PlayQuiz() {
    return (
        <>
            <Container>
                <h3 className="m-4">Title of the Quiz</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor 
                    vitae assumenda? Ab omnis dolorum deleniti consequuntur ex! Quo dolorem eius laborum! 
                    Repellendus atque nulla eligendi omnis debitis in accusamus ea et tempore deleniti laudantium 
                    tenetur libero pariatur voluptatum, vero iure nobis vitae vel. Minus, consectetur laboriosam! 
                    Nobis, quaerat eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt ad mollitia libero, vero at voluptatem optio, modi laudantium nostrum voluptatum
                    quo, nobis saepe deleniti veritatis pariatur consequatur debitis quidem asperiores.</p>
                
                <Row>
                    <Col sm={6}> 
                    <InputGroup className="">
                        <InputGroup.Text>Enter Your Name</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                    </InputGroup>
                    </Col>
                    
                    <div className="container my-3">
                        <div className="col-md-12">
                            <Button href='/' onClick={() => { window.alert("Create the quiz first") }}>
                                Play Quiz
                            </Button>
                        </div>
                    </div>

                </Row>

            </Container>
        </>
    )
}

export default PlayQuiz;