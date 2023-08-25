import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function HomeQuiz() {
    return (
       <Container>
                
            <Card className='m-5'>
                <Card.Body color='red'>Currently there are no quizes!</Card.Body>
                
            </Card>
       </Container>
    );
}

export default HomeQuiz;