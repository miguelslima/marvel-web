import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardCharacters = styled(Link)`
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

  font-size: 20px;
  font-weight: bold;
  padding: 8px;
  max-width: 150ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.titleBg};
  background-color: ${({ theme }) => theme.headerBg};

  border-bottom-width: 2px;
  border-bottom-color: #a00001;
  border-bottom-style: solid;
`;

export const CharacterDescription = styled.p`
  /* margin: 5px 10px 0; */
  font-size: 11px;
  max-height: 90px;
  padding: 0 10px;
  flex: display;
  flex-direction: row;
  align-items: center;

  max-width: 145ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
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
