import { Col, Card } from 'react-bootstrap';

export const HiddenCard: React.FC = () => {
    return (
        <Col lg={3} style={{cursor: 'pointer'}}>
            <Card style={{height: '100%', justifyContent: 'center', display: 'flex,'}}>
                <span style={{
                    fontSize: '80px',
                    textAlign: 'center',
                }}>?</span>
            </Card>
        </Col>
    )
}