import React, { useState } from 'react';
import styled from 'styled-components';
import { Profile } from '../../types';

const Header = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const BackArrow = styled.img`
  height: 1.2rem;
  margin: 0.5rem;
`;

const ImageMarker = styled.img`
  width: 0.8rem;
  display: inline-block;
  margin: 2px;
`;

const ImgDiv = styled.div`
  display: inline-block;
  height: 85vh;
`;

const QuarterImgDiv = styled(ImgDiv)`
  width: 25vw;
`;

const HalfImgDiv = styled(ImgDiv)`
  width: 50vw;
`;

export default function UserProfile({
  setOpenProfile,
  profile,
}: {
  setOpenProfile: (profile: Profile | undefined) => void;
  profile: Profile;
}): JSX.Element {
  const [selectedImg, setSelectedImg] = useState(0);

  const imageMarkers = profile.images.map((imgSrc, index) => {
    return (
      <ImageMarker
        src={'/dreamphone-grindr/img/dash.png'}
        style={{ opacity: selectedImg === index ? '100%' : '30%' }}
        key={index}
      />
    );
  });

  setSelectedImg(0);

  return (
    <div style={{ position: 'relative' }}>
      <Header>
        <BackArrow
          onClick={() => {
            setOpenProfile(undefined);
          }}
          src={'/dreamphone-grindr/img/back.png'}
        />
        <div>{imageMarkers}</div>
        <BackArrow src={'/dreamphone-grindr/img/block.png'} />
      </Header>
      <div>
        <QuarterImgDiv></QuarterImgDiv>
        <QuarterImgDiv></QuarterImgDiv>
        <HalfImgDiv></HalfImgDiv>
      </div>
      <div>{profile.title}</div>
    </div>
  );
}
