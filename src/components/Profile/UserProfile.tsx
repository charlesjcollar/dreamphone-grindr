import React, { useEffect, useState } from 'react';
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

const ImgNavContainer = styled.div`
  position: absolute;
  z-index: 5;
`;

const ImgDiv = styled.div`
  display: inline-block;
  height: 100%;
`;

const QuarterImgDiv = styled(ImgDiv)`
  width: 25vw;
`;

const HalfImgDiv = styled(ImgDiv)`
  width: 50vw;
`;

const ImagesContainer = styled.div`
  position: fixed;
  z-index: 1;
  height: 100vh;
`;

const ImagesSlider = styled.div`
  position: absolute;
  height: auto;
`;

const ImageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-block;
  overflow: hidden;
`;

export default function UserProfile({
  setOpenProfile,
  profile,
}: {
  setOpenProfile: (profile: Profile | undefined) => void;
  profile: Profile;
}): JSX.Element {
  const [selectedImg, setSelectedImg] = useState(0);
  const [enlargedImg, setEnlargedImg] = useState(false);
  const [imageMarkers, setImageMarkers] = useState<JSX.Element[]>([]);
  const [renderedImages, setRenderedImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setImageMarkers(
      profile.images.map((imgSrc, index) => {
        console.log(selectedImg);
        return (
          <ImageMarker
            src={'/dreamphone-grindr/img/dash.png'}
            style={{ opacity: index === selectedImg ? '100%' : '30%' }}
            key={index}
          />
        );
      })
    );
  }, [selectedImg]);

  useEffect(() => {
    setRenderedImages(
      profile.images.length === 0
        ? [<img src={'/dreamphone-grindr/img/blank-profile.png'} key={0} />]
        : profile.images.map((imgSrc, index) => (
            <ImageDiv
              style={{
                background: 'url(/dreamphone-grindr/img/profiles/'
                  .concat(imgSrc)
                  .concat(')'),
                backgroundSize: enlargedImg ? 'contain' : 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                transition: 'background-size .2s',
              }}
              key={index}
            ></ImageDiv>
          ))
    );
  }, [enlargedImg]);

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
      <ImagesContainer
        style={{ width: (renderedImages.length * 100).toString().concat('vw') }}
      >
        <ImagesSlider
          style={{
            left: (selectedImg * -100).toString().concat('vw'),
            transition: 'left .3s',
          }}
        >
          {renderedImages}
        </ImagesSlider>
      </ImagesContainer>
      <ImgNavContainer style={{ height: enlargedImg ? '100vh' : '80vh' }}>
        <QuarterImgDiv
          onClick={() => {
            setSelectedImg(selectedImg === 0 ? 0 : selectedImg - 1);
          }}
        ></QuarterImgDiv>
        <QuarterImgDiv
          onClick={() => {
            setEnlargedImg(!enlargedImg);
          }}
        ></QuarterImgDiv>
        <HalfImgDiv
          onClick={() => {
            setSelectedImg(
              selectedImg === renderedImages.length - 1
                ? renderedImages.length - 1
                : selectedImg + 1
            );
          }}
        ></HalfImgDiv>
      </ImgNavContainer>
      <div>{profile.title}</div>
    </div>
  );
}
