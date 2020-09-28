import React from 'react';
import styled from 'styled-components';
import HeroLarge from '../assets/hero.jpg';
// import HeroSmall from '../assets/hero-small.jpg';
const HeroImgContainer = styled.div`
  background-image: url(${HeroLarge});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: calc(100vh - 3em);
  width: 100vw;
`;

export default function StartPage() {
  return (
    <main>
      <HeroImgContainer />
    </main>
  );
}
