import { useState } from "react";
import styled from "styled-components";
import { colors } from "../Themes/defaultTheme";
import logo from "../../assets/logo.png";
import { Game } from "../../types";
import { getRandomKey, isKeyValid } from "../../utils/GameUtils";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.background};
  color: ${colors.textGray};
  text-align: center;
`;

const Logo = styled.img`
  width: 40%;
  display: inline-block;
  margin-top: 8rem;
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
  padding: .5rem;
  font-size: 2em;
  width: 70%;
  max-width: 70vw;
  text-transform: uppercase;
`;

interface propsI{
  setGame: (game: Game) => void
};

export default function Login(props: propsI) {
  const [key, setKey] = useState<string | undefined>(undefined);
  const [isBadKey, setIsBadKey] = useState(false);

  const generateRandomKey = (): void => {
    let key = getRandomKey();
    setKey(key);
  };

  const validateAndStartGame = (): void => {
    if (isKeyValid(key)) {
      setIsBadKey(false);
    } else {
      setIsBadKey(true);
    }
  }

  return (
    <Page>
      <Logo src={logo} alt="Grindr" /><br />
      <GenerateButton onClick={generateRandomKey}>Generate New Game</GenerateButton>
      <p>Or enter code:</p>
      <CodeInput type="text" value={key} maxLength={4} onChange={(e) => setKey(e.target.value)} />
      <p style={{visibility: isBadKey ? "visible" : "hidden"}}>Key is invalid!</p>
      <PlayButton onClick={validateAndStartGame}>Start Game</PlayButton>
    </Page>
  )
}