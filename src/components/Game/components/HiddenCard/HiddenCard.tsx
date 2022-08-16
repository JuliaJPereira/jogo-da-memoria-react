import { Col, Card } from 'react-bootstrap';

type THiddenCardProps = {
    onClick: () => void;
}

export const HiddenCard: React.FC<THiddenCardProps> = ({onClick}) => {
    return (
        <Col lg={3} style={{cursor: 'pointer', marginBottom: '20px'}} onClick={onClick}>
            <Card style={{height: '100%', justifyContent: 'center', display: 'flex,'}}>
                <span style={{
                    fontSize: '80px',
                    textAlign: 'center',
                }}>?</span>
            </Card>
        </Col>
    )
}