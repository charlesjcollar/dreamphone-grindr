import React from 'react';
import styled from 'styled-components';
import { Game } from '../../types';
import Page from '../Page';
import { colors } from '../Themes/defaultTheme';
import Thumbnail from '../Thumbnail/Thumbnail';
import ThumbnailsContainer from '../Thumbnail/ThumbnailsContainer';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 7em;
  background: ${colors.background};
`;

const Header = styled.div`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  display: inline-block;
  height: 2.3rem;
  border-radius: 1.15rem;
`;

const ProfileImage = styled(Image)`
  filter: brightness(120%);
`;

const FilterImage = styled(Image)``;

const Browse = styled.span`
  font-weight: 700;
  color: ${colors.white};
  font-size: 1.3em;
`;

const Location = styled.div`
  color: ${colors.white};
  border-bottom: 2px solid ${colors.white};
  padding: 0.3em 2em;
  text-align: left;
  font-weight: 500;
  width: 100%;
`;

export default function Board({ game }: { game: Game }): JSX.Element {
  const thumbnails = game.profiles.map((profile, i) => (
    <Thumbnail profile={profile} key={i} />
  ));
  return (
    <Page>
      <HeaderContainer>
        <Header>
          <ProfileImage
            src={require('../../assets/img/blank-profile-thumb.png')}
          />
          <Browse>Browse</Browse>
          <FilterImage src={require('../../assets/img/filter-off.png')} />
        </Header>
        <Location>Nearby</Location>
      </HeaderContainer>
      <ThumbnailsContainer>{thumbnails}</ThumbnailsContainer>
    </Page>
  );
}
