import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
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

  margin-bottom: 80px;
`;

export const CardCharacters = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 5px;
  margin: 10px;

  text-align: center;
  border: 2px solid #a00001;
  box-shadow: 1px 4px 15px rgba(50, 50, 50, 0.77);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const CharacterNumber = styled.div`
  display: flex;
  padding: 5px 5px 5px 0;

  border-top-width: 1px;
  border-top-color: #a00001;
  border-top-style: solid;

  p {
    margin-left: 10px;
  }
`;
