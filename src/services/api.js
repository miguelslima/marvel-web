// import md5 from 'md5';

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

// const readRandomCharacter = (callback) => {
//   const offset = Math.floor(Math.random() * 1000);
//   listCharacters(null, offset, (characters) => {
//     const index = Math.floor(Math.random() * characters.length);
//     callback(characters[index].id);
//   });
// };

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

const readComicURL = (id) => {
  return `${API_BASE_URL}characters/${id}/comics?${getHash()}`;
};

const processRequestError = (error) => {
  console.log(error);
};

const getHash = () => {
  const timestamp = 'thegnomecrazy';
  // const timestamp = new Date().getTime();
  // const timestamp = '1';
  // const apiKey = '1318532903321ecb1fe08f70c285ac5d';
  // const privateKey = 'efba232189e63e19886950915edf0ce3f0c87468';
  // const hash = 'cf655219ae0b5145480936eaa5b20e93';
  // const hash = md5(`${timestamp}${privateKey}${apiKey}`);
  // const hash = md5(
  //   `${timestamp}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
  // );
  return `ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`;
};
