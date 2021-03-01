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

export const CardCharacters = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 5px;
  margin: 5px;

  text-align: center;
  border: 2px solid #a00001;
  box-shadow: 1px 4px 9px rgba(160, 0, 1, 0.77);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transition: all 300ms ease-in;
    transform: scale(1.05);
  }

  img {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 196px;
    height: 200px;
  }
`;

export const CardDescriptionCharacters = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CharacterName = styled.p`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;

  background: #444;

  border-bottom-width: 2px;
  border-bottom-color: #a00001;
  border-bottom-style: solid;
`;

export const CharacterDescription = styled.span`
  /* margin: 5px 10px 0; */
  font-size: 11px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CharacterNumber = styled.span`
  display: flex;
  padding: 5px 5px 5px 0;

  border-top-width: 1px;
  border-top-color: #a00001;
  border-top-style: solid;

  p {
    margin-left: 10px;
  }
`;
