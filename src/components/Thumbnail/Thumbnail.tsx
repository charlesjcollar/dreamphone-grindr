import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../types';
import { colors } from '../Themes/defaultTheme';

const ProfileName = styled.span`
  position: absolute;
  bottom: 0px;
  color: ${colors.white};
  left: 4px;
  white-space: nowrap;
  text-overflow: fade;
`;

const Online = styled.span`
  background: #69e281;
  border-radius: 0.6rem;
  height: 0.6rem;
  width: 0.6rem;
  display: inline-block;
  margin-right: 0.3rem;
`;

export default function Thumbnail({
  profile,
  setOpenProfile,
}: {
  profile: Profile;
  setOpenProfile: (profile: Profile | undefined) => void;
}): JSX.Element {
  const imageUrl =
    profile.images.length > 0
      ? '/dreamphone-grindr/img/profiles/'.concat(profile.images[0])
      : '/dreamphone-grindr/img/blank-profile-thumb.png';
  const ProfileContainer = styled.div`
    width: 33.33vw;
    height: 33.33vw;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0) 80%
      ),
      url(${imageUrl});
    background-size: cover;
    background-position: 5% 0%;
    font-size: 0.8em;
    font-weight: 400;
  `;

  return (
    <ProfileContainer
      onClick={() => {
        setOpenProfile(profile);
      }}
    >
      <ProfileName>
        {Math.random() > 0.5 ? <Online /> : ''}
        {profile.title}
      </ProfileName>
    </ProfileContainer>
  );
}
