import React from 'react';
import styled from 'styled-components';
import Page from '../Page';

const Header = styled.div`
  padding: 0.5rem;
`;

const ProfileImage = styled.img`
  display: inline-block;
  height: 2.3rem;
  border-radius: 1.15rem;
  filter: brightness(120%);
`;

export default function Board(): JSX.Element {
  return (
    <Page>
      <Header>
        <ProfileImage
          src={require('../../assets/img/blank-profile-thumb.png')}
        />
        <span>Browse</span>
      </Header>
    </Page>
  );
}
