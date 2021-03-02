import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;

  @media (max-width: 1080px) {
    font-size: 24px;
  }

  @media (max-width: 720px) {
    font-size: 22px;
  }
`;

export const ContainerCharacters = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  margin-bottom: 80px;

  button {
    margin-left: 10px;
    width: 100px;
    outline: 0;
    border: 0;
    padding: 10px;
    border-radius: 10px;
    background: #a00001;
    color: #fff;

    transition: opacity 0.3s;
  }

  button:hover {
    opacity: 0.6;
  }
`;

export const CardCharactersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 90px;
`;
