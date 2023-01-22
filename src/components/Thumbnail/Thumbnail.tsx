import React from 'react';
import styled from 'styled-components';
import { colors } from '../Themes/defaultTheme';

const ProfileName = styled.span`
  position: absolute;
  bottom: 0px;
  color: ${colors.white};
  left: 4px;
`;

const Online = styled.span`
  background: #69e281;
  border-radius: 0.7rem;
  height: 0.7rem;
  width: 0.7rem;
  display: inline-block;
  margin-right: 0.3rem;
`;

export default function Thumbnail(): JSX.Element {
  const Profile = styled.div`
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
      url(${require('../../assets/img/profiles/0ebb73b76f16a08504aa664c88db907b.jpg')});
    background-size: cover;
    background-position: 5% 0%;
    font-size: 0.9em;
    font-weight: 300;
  `;
  return (
    <Profile>
      <ProfileName>
        {Math.random() > 0.5 ? <Online /> : ''}
        👀Beyond🪝ups
      </ProfileName>
    </Profile>
  );
}
