/* eslint-disable react/prop-types */
import React from 'react';

import {
  CardCharacters,
  CardDescriptionCharacters,
  CharacterName,
  CharacterDescription,
  CharacterNumber,
} from './styles';

function CardChars({ character }) {
  return (
    <CardCharacters
      to={{
        pathname: '/character',
        state: { id: `${character.id}` },
      }}
    >
      <img
        src={`${
          character.thumbnail
            ? `${character.thumbnail.path}.${character.thumbnail.extension}`
            : null
        }`}
        alt={character.name}
      />
      <CardDescriptionCharacters>
        <CharacterName numberOfLines={1}>{character.name}</CharacterName>
        <CharacterDescription numberOfLines={5}>
          {character.description === ''
            ? 'Personagem sem descrição'
            : character.description}
        </CharacterDescription>
        <CharacterNumber>
          <p>Series {character.series.available}</p>
          <p>Comics {character.comics.available}</p>
          <p>Stories {character.stories.available}</p>
        </CharacterNumber>
      </CardDescriptionCharacters>
    </CardCharacters>
  );
}

export default CardChars;
