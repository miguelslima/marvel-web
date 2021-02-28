import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { listCharacters } from '../../services/api';

import './styles.css';
// import { Container } from './styles';

function Search() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(e.target.value);
    listCharacters(query, null, (results) => setSearchResults(results.results));

    // const cachedHits = localStorage.getItem(query);

    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    // }

    if (searchResults.length === 0) {
      setLoading(true);
    } else if (searchResults.length > 3) {
      setLoading(false);
    }
  };

  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__input"
          placeholder="Digite o nome do personagem"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {loading === true ? (
        <div>
          <h1>Carregando</h1>
        </div>
      ) : (
        <ul className="search__dropdown">
          {searchResults.length > 0 &&
            searchResults.map((character) => (
              <li>
                <Link
                  to={{
                    pathname: '/character',
                    state: { id: `${character.id}` },
                  }}
                >
                  {character.name}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
