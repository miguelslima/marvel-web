import styled from 'styled-components';

export const Container = styled.div``;

export const CharacterContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const CharacterHeader = styled.div`
  display: flex;
  flex-direction: row;

  img {
    border-radius: 100px;
    width: 200px;
    height: 200px;
  }

  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;

  p {
    text-align: center;
  }
`;

export const UrlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    font-size: 14px;
    color: #fff;
    background: #a00001;
    padding: 15px;
    margin: 0 10px;
    border-radius: 20px;
    transition: opacity 0.3s;
  }

  li:hover {
    opacity: 0.7;
  }

  @media only screen and (min-width: 320px) {
    margin-top: 20px;
  }
`;

export const ComicsContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;

  h2 {
    text-align: center;
    margin: 10px 0;
  }

  img {
    width: 100px;
    height: 140px;
    margin: 5px;
    box-shadow: 3px 3px 3px rgba(50, 50, 50, 0.77);
  }
`;

export const SeriesContainer = styled.div`
  margin-bottom: 80px;
  text-align: center;

  h2 {
    text-align: center;
    margin: 10px 0;
  }

  img {
    width: 100px;
    height: 140px;
    margin: 5px;
    box-shadow: 3px 3px 3px rgba(50, 50, 50, 0.77);
  }
`;
