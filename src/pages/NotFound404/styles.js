import styled from 'styled-components';

import endGame from '../../assets/endGame.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${endGame});
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #a00001;
  text-align: center;
`;
