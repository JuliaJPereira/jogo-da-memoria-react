import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import _ from "lodash";

import AngularLogo from "../../assets/angular.svg";
import BackboneLogo from "../../assets/backbone.svg";
import EmberLogo from "../../assets/ember.svg";
import ReactLogo from "../../assets/react.svg";
import VueLogo from "../../assets/vue.svg";

import { Card } from "./components/Card";
import { HiddenCard } from "./components/HiddenCard";
import { isTemplateExpression } from "typescript";

type Structure = {
  text: string;
  image: string;
  showing: boolean;
};

const CardOptions: Structure[] = [
  {
    text: "Angular",
    image: AngularLogo,
    showing: false,
  },
  {
    text: "Backbone",
    image: BackboneLogo,
    showing: false,
  },
  {
    text: "Ember",
    image: EmberLogo,
    showing: false,
  },
  {
    text: "Vue",
    image: VueLogo,
    showing: false,
  },
  {
    text: "React",
    image: ReactLogo,
    showing: false,
  },
  {
    text: "Angular",
    image: AngularLogo,
    showing: false,
  },
  {
    text: "Backbone",
    image: BackboneLogo,
    showing: false,
  },
  {
    text: "Ember",
    image: EmberLogo,
    showing: false,
  },
  {
    text: "Vue",
    image: VueLogo,
    showing: false,
  },
  {
    text: "React",
    image: ReactLogo,
    showing: false,
  },
];

export const Game: React.FC = () => {
  const [state, setState] = useState({
    initialized: false,
    gameStructure: [] as Structure[],
    selections: [] as number[],
  });

  const initGame = () => {
    setState({
      initialized: true,
      gameStructure: _.shuffle(CardOptions),
      selections: [],
    });
  };

  const onClickHiddenCard = (index: number) => {
    let updatedGameStructure = [...state.gameStructure];
    updatedGameStructure[index].showing = true;

    if (state.selections.length === 0) {
      setState({
        ...state,
        selections: [index],
        gameStructure: updatedGameStructure,
      });
      return;
    }

    setState({
      ...state,
      selections: [state.selections[0], index],
      gameStructure: updatedGameStructure,
    });

    setTimeout(validateSelections, 1000);
  };

  const validateSelections = () => {
    const [first, second] = state.selections;
    const firstItem = state.gameStructure[first];
    const secondItem = state.gameStructure[second];

    if (firstItem.text !== secondItem.text) {
      let updatedGameStructure = [...state.gameStructure];
      updatedGameStructure[first].showing = false;
      updatedGameStructure[second].showing = false;
      setState({
        ...state,
        gameStructure: updatedGameStructure,
      });
      return;
    }

    if (state.gameStructure.every((x) => x.showing)) {
      alert("Você terminou o jogo");
    }

    setState({...state, selections: []})
  };

  if (!state.initialized) {
    return <Button onClick={initGame}>Iniciar o Jogo</Button>;
  }

  console.log(state);

  return (
    <Container>
      <Row>
        {state.gameStructure.map((item, key) =>
          item.showing ? (
            <Card key={key} image={item.image} text={item.text} />
          ) : (
            <HiddenCard key={key} onClick={() => onClickHiddenCard(key)} />
          )
        )}
      </Row>
    </Container>
  );
};
