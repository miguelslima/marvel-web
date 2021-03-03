import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const ContainerCharacters = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin-left: 10px;
    width: 100px;
    outline: 0;
    border: 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #a00001;

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
