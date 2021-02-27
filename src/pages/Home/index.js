import React, { useEffect, useState } from 'react';

import { listCharacters } from '../../services/api';

function Home() {
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

    setTimeout(() => {
      setLoading(true);
    }, 2000);
    setOffset(offset - 20);
  };

  const handleNextButton = () => {
    setLoading(true);
    if (offset >= 0) {
      setOffset(offset + 20);
    }
    setLoading(false);
  };

  return (
    <div>
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
          {characters.map((character, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>{character.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
