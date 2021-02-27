import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';

import { listCharacters } from '../../services/api';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);

      await listCharacters(null, offset, (results) => {
        setTotalChars(results.total);
        setCharacters(results.results);
      });
      setLoading(false);
    }

    loadCharacters();
  }, [offset, characters]);

  const handlePreviousButton = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 20);
  };

  const handleNextButton = () => {
    if (offset >= 0) {
      setOffset(offset + 20);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Search />

      <h1>Personagens ({`${offset + 20} de ${totalChars}`})</h1>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <div>
          <button type="button" onClick={handlePreviousButton}>
            Previous
          </button>
          <button type="button" onClick={handleNextButton}>
            Next
          </button>
          {characters.map((character) => (
            <p>{character.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
