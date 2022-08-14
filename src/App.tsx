import { Container } from "react-bootstrap";
import { Appbar } from "./components/Appbar";
import { Game } from "./components/Game";

function App() {
  return (
    <main>
      <Appbar/>
      <section>
        <Container style={{marginTop: '100px'}}>
          <Game/>
        </Container>
      </section>
    </main>
  );
}

export default App;
