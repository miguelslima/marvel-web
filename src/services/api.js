/* eslint-disable no-unused-vars */
import md5 from 'md5';

const MAX_RESULTS = 20;
const API_BASE_URL = 'https://gateway.marvel.com/v1/public/';

// const getMaxResults = () => {
//   return MAX_RESULTS;
// };

export const readCharacterById = (id, callback) => {
  fetch(getReadCharacterByIdURL(id))
    .then((response) => response.json())
    .then((response) => callback(response.data.results[0]))
    .catch((error) => processRequestError(error));
};

export const getReadCharacterByIdURL = (id) => {
  return `${API_BASE_URL}characters/${id}?${getHash()}`;
};

export const listCharacters = (name, offset, callback) => {
  fetch(getListCharactersURL(name, offset))
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => processRequestError(error));
};

const getListCharactersURL = (name, offset) => {
  return name
    ? `${API_BASE_URL}characters?nameStartsWith=${name}&limit=${MAX_RESULTS}&offset=${offset}&${getHash()}`
    : `${API_BASE_URL}characters?limit=${MAX_RESULTS}&offset=${offset}&${getHash()}`;
};

const readComicURL = (id) => {
  return `${API_BASE_URL}characters/${id}/comics?${getHash()}`;
};

export const listComics = (id, callback) => {
  fetch(readComicURL(id))
    .then((response) => response.json())
    .then((response) => {
      const comics = response.data.results.map(
        // eslint-disable-next-line prefer-template
        (item) => item.thumbnail.path + '.' + item.thumbnail.extension
      );
      callback(comics);
    })
    .catch((error) => processRequestError(error));
};

const readSeriesURL = (id) => {
  return `${API_BASE_URL}characters/${id}/series?${getHash()}`;
};

export const listSeries = (id, callback) => {
  fetch(readSeriesURL(id))
    .then((response) => response.json())
    .then((response) => {
      const series = response.data.results.map(
        // eslint-disable-next-line prefer-template
        (item) => item.thumbnail.path + '.' + item.thumbnail.extension
      );
      callback(series);
    })
    .catch((error) => processRequestError(error));
};

const processRequestError = (error) => {
  console.log(error);
};

const getHash = () => {
  // const timestamp = 'thegnomecrazy';
  // const timestamp = new Date().getTime();
  const timestamp = '1540926966466';
  const apiKey = 'd886820a3bcacadd28b7d979ff3ad465';
  // const privateKey = 'efba232189e63e19886950915edf0ce3f0c87468';
  const hash = 'db9ab2b68b0b7a705aec88723ea039fa';
  // const hash = md5(`${timestamp}${privateKey}${apiKey}`);
  // const hash = md5(
  //   `${timestamp}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
  // );
  return `ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
  // return `ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`;
};
