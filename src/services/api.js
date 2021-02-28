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
    .then((response) => callback(response.data))
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
  // const timestamp = new Date().getTime();
  const timestamp = '1';
  const apiKey = '042fa69788c764bd7ef961031ba5c4bb';
  // const privateKey = '1b2e8c7fd3399053a8185a471baba77e15262ba8';
  const hash = '5ac7c5cce6eb3c55c381efa992fb9c4f';
  // const hash = md5(`${timestamp}${privateKey}${apiKey}`);
  return `ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
};
