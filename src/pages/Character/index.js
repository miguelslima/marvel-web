import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { readCharacterById, listComics } from '../../services/api';
// import { Container } from './styles';

function Character() {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState([]);
  const [comics, setComics] = useState([]);
  const data = useLocation();

  useEffect(() => {
    const handleSearch = () => {
      setLoading(true);
      readCharacterById(data.state.id, (char) => {
        setCharacter(char);
      });
      listComics(data.state.id, (comic) => setComics(comic));
      setLoading(false);
    };
    handleSearch();
  }, [data]);

  return (
    <div>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <div>
          <h1>{character.name}</h1>
          <h3>
            {character.description
              ? character.description
              : 'Não há descrição para esse herói'}
          </h3>
          {comics.map((comic) => (
            <img style={{ width: 100, height: 100 }} src={comic} alt="" />
          ))}
        </div>
      )}
    </div>
  );
}

export default Character;
