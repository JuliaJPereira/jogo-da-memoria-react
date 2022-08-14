import { Navbar, Container } from "react-bootstrap"

export const Appbar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    Jogo da Memória
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}