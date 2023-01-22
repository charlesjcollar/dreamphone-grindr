import React from 'react';
import styled from 'styled-components';
import { colors } from './Themes/defaultTheme';

const PageDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${colors.background};
  color: ${colors.textGray};
  text-align: center;
`;

export default function Page(props: {
  children: JSX.Element | JSX.Element[] | string;
}): JSX.Element {
  return <PageDiv>{props.children}</PageDiv>;
}
