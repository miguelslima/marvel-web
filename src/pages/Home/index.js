import React, { useEffect, useState } from 'react';

import api from '../../services/api';
// URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadApi() {
      setLoading(true);
      const response = await api.get(
        `comics?ts=thegnomecrazy&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`
      );

      setComics(response.data.data.results);
      setLoading(false);
    }

    loadApi();
  }, []);
  console.log(comics);

  return (
    <div>
      <h1>Home</h1>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <>
          {comics.map((comic, index) => (
            <div>
              <h2>{comic.title}</h2>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
