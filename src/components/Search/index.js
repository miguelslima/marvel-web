import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { listCharacters } from '../../services/api';

// import { Container } from './styles';

function Search() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(e.target.value);
    listCharacters(query, null, (results) => setSearchResults(results));

    if (searchResults.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  // const handleDescriptionCharacter = ({ id }) => {
  //   console.log('Enviado dados de ' + id);
  // };

  return (
    <div>
      <input
        placeholder="Digite o nome do personagem"
        value={search}
        onChange={handleSearch}
      />
      {loading === true ? (
        <div>
          <h1>Carregando</h1>
        </div>
      ) : (
        <div>
          {searchResults.map((result) => {
            return (
              <ul>
                <Link
                  to={{
                    pathname: '/character',
                    state: { id: `${result.id}` },
                  }}
                >
                  {result.name}
                </Link>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
