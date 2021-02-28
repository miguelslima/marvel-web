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
      if (character.length === 0) {
        setLoading(true);
      }
      readCharacterById(data.state.id, (char) => {
        setCharacter(char);
      });
      listComics(data.state.id, (comic) => setComics(comic));
      setLoading(false);
    };
    handleSearch();
  }, [data, character]);

  return (
    <div>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <div style={{ padding: 20 }}>
          <h1>{character.name}</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              style={{ width: 200, height: 200 }}
              src={`${
                character.thumbnail
                  ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                  : null
              }`}
              alt={character.name}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>
                {character.description
                  ? character.description
                  : 'Não há descrição para esse herói'}
              </p>
              <ul className="featured-character__links">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {character.urls
                    ? character.urls.map((link) => (
                        <li
                          style={{ padding: 20 }}
                          className="feature-character__link"
                        >
                          <a href={link.url}>{link.type}</a>
                        </li>
                      ))
                    : null}
                </div>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h3>Comics</h3>
            {comics.map((comic) => (
              <img
                style={{
                  width: 200,
                  height: 150,
                  margin: 10,
                  boxShadow: '9px 7px 5px rgba(50, 50, 50, 0.77)',
                }}
                src={comic}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Character;
