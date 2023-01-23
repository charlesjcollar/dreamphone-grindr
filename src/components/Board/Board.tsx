import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Game, Profile } from '../../types';
import { Page } from '../Page';
import { colors } from '../Themes/defaultTheme';
import Thumbnail from '../Thumbnail/Thumbnail';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 7em;
  background: ${colors.background};
  z-index: 2;
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

const ThumbnailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  position: absolute;
  z-index: 1;
`;

export default function Board({
  game,
  setOpenProfile,
}: {
  game: Game;
  setOpenProfile: (profile: Profile | undefined) => void;
}): JSX.Element {
  const [thumbnails, setThumbnails] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setThumbnails(
      game.profiles.map((profile, i) => (
        <Thumbnail setOpenProfile={setOpenProfile} profile={profile} key={i} />
      ))
    );
  }, [game]);
  return (
    <Page>
      <HeaderContainer>
        <Header>
          <ProfileImage
            src={'/dreamphone-grindr/img/blank-profile-thumb.png'}
          />
          <Browse>Browse</Browse>
          <FilterImage src={'/dreamphone-grindr/img/filter-off.png'} />
        </Header>
        <Location>Nearby</Location>
      </HeaderContainer>
      <ThumbnailsContainer>{thumbnails}</ThumbnailsContainer>
    </Page>
  );
}
