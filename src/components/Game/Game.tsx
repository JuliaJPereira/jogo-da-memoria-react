import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import AngularLogo from '../../assets/angular.svg';
import BackboneLogo from '../../assets/backbone.svg';
import EmberLogo from '../../assets/ember.svg';
import ReactLogo from '../../assets/react.svg';
import VueLogo from '../../assets/vue.svg';

import { Card } from './components/Card'
import { HiddenCard } from './components/HiddenCard';

type Structure = {
    text: string;
    image: string;
    showing: boolean;
    position: number[];
}

const CardOptions: Structure[] = [
    {
        text: 'Angular',
        image: AngularLogo,
        showing: false,
        position: [],
    },
    {
        text: 'Backbone',
        image: BackboneLogo,
        showing: false,
        position: [],
    },
    {
        text: 'Ember',
        image: EmberLogo,
        showing: false,
        position: [],
    },
    {
        text: 'Vue',
        image: VueLogo,
        showing: false,
        position: [],
    },
];

export const Game: React.FC = () => {

    const [state, setState] = useState({
        initialized: false,
        gameStructure: [] as Structure[]
    })

    const initGame = () => {
  

    }

    if(!state.initialized){
        return(
            <Button onClick={initGame}>
                Iniciar o Jogo
            </Button>
        )
    }

    return (
        <Container>
            <Row>
                <Card text="Angular" image={AngularLogo} />
                <HiddenCard/>
            </Row>
        </Container>
    );
}