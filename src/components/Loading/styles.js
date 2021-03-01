import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingioSpinner = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
`;

export const Ldio = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  div {
    box-sizing: border-box !important;
  }

  > div {
    position: absolute;
    width: 61px;
    height: 61px;
    top: 19.5px;
    left: 19.5px;
    border-radius: 50%;
    border: 1px solid #000;
    border-color: #8d0305 transparent #8d0305 transparent;
    animation: ldio 1.282051282051282s linear infinite;
  }
  > div:nth-child(2) {
    border-color: transparent;
  }
  > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  > div:nth-child(2) div:before,
  > div:nth-child(2) div:after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: -1px;
    left: 29px;
    background: #8d0305;
    border-radius: 50%;
    box-shadow: 0 60px 0 0 #8d0305;
  }
  > div:nth-child(2) div:after {
    left: -1px;
    top: 29px;
    box-shadow: 60px 0 0 0 #8d0305;
  }

  div {
    box-sizing: content-box;
  }

  @keyframes ldio {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
