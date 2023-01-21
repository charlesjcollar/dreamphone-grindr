import { useState } from "react";
import styled from "styled-components";
import { colors } from "../Themes/defaultTheme";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.background};
  color: ${colors.textGray}
`;

export default function Login() {
  return (
    <Page>
      Hello
    </Page>
  )
}