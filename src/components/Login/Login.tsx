import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../Themes/defaultTheme';
import { Game } from '../../types';
import { getRandomKey, isKeyValid } from '../../utils/GameUtils';
import Page from '../Page';

const Logo = styled.img`
  width: 40%;
  display: inline-block;
  margin-top: 4rem;
`;

const Button = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 3px;
  font-weight: 500;
  width: 60%;
  margin: 4rem 0;
  font-size: 1.2em;
`;

const GenerateButton = styled(Button)`
  background: ${colors.mediumGray};
  color: ${colors.textGray};
`;

const PlayButton = styled(Button)`
  background: ${colors.yellow};
  color: ${colors.black};
`;

const CodeInput = styled.input`
  background: ${colors.background};
  border: none;
  border-bottom: 1px solid ${colors.textGray};
  text-align: center;
  color: ${colors.white};
  padding: 0.5rem;
  font-size: 2em;
  width: 70%;
  max-width: 70vw;
  text-transform: uppercase;
`;

interface PropsI {
  setGame: (game: Game) => void;
}

export default function Login(props: PropsI): JSX.Element {
  const [key, setKey] = useState<string | undefined>(undefined);
  const [isBadKey, setIsBadKey] = useState(false);

  const generateRandomKey = (): void => {
    const newKey = getRandomKey();
    setKey(newKey);
  };

  const validateAndStartGame = (): void => {
    if (isKeyValid(key)) {
      setIsBadKey(false);
      props.setGame({ key });
    } else {
      setIsBadKey(true);
    }
  };

  return (
    <Page>
      <Logo src={require('../../assets/logo.png')} alt="Grindr" />
      <br />
      <GenerateButton onClick={generateRandomKey}>
        Generate New Game
      </GenerateButton>
      <p>Or enter code:</p>
      <CodeInput
        type="text"
        value={key}
        maxLength={4}
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <p style={{ visibility: isBadKey ? 'visible' : 'hidden' }}>
        Key is invalid!
      </p>
      <PlayButton onClick={validateAndStartGame}>Start Game</PlayButton>
    </Page>
  );
}
