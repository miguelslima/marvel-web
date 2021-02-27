import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';

import { listCharacters } from '../../services/api';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);

      await listCharacters(null, null, (results) => {
        setTotalChars(results.total);
        setCharacters(results.results);
      });
      setLoading(false);
    }

    loadCharacters();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Search />

      <h1>Personagens ({`${characters.length} de ${totalChars}`})</h1>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <div>
          {characters.map((character) => (
            <p>{character.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
