

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import createquiz from '../images/createquiz.png'
import myquiz from '../images/myquiz.png'
import playquiz from '../images/playquiz.png'


function Home1() {

    return (
        <Container className='p-4'>

            <Row>
                <Col className='mx-3' sm>
                    <Image src={createquiz} height={350} rounded />
                    <Col sm>
                        <div className="d-grid gap-2 my-4">
                            <Button href='/Quiz' variant="outline-dark" size="lg">
                                Create New Quiz
                            </Button>
                        </div>
                    </Col>
                </Col>

                <Col className='mx-3' sm>
                    <Image src={myquiz} height={350} rounded />
                    <Col sm>
                    <div className="d-grid gap-2 my-4">
                        <Button href="/HomeQuiz" variant="outline-dark" size="lg">
                            My Quizzes
                        </Button>
                    </div>
                    </Col>
                </Col>

                <Col className='mx-3' sm>
                    <Image src={playquiz} height={350} rounded />
                    <Col sm>
                        <div className="d-grid gap-2 my-4">
                            <Button href="/PlayQuiz" variant="outline-dark" size="lg">
                                Play Quizes
                            </Button>
                        </div>
                    </Col>
                   
                </Col>
            </Row>

        </Container>
    );
}

export default Home1;