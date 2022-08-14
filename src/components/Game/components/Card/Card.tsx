import { Col, Card as BCard } from 'react-bootstrap';

type TCardProps = {
    image: string;
    text: string;
}

export const Card: React.FC<TCardProps> = ({ image, text }) => {
    return (
        <Col lg={3}>
            <BCard>
                <BCard.Img variant="top" src={image} style={{ padding: '10px' }} />
                <BCard.Body>
                    <BCard.Title>{text}</BCard.Title>
                </BCard.Body>
            </BCard>
        </Col>
    )
}