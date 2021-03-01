import React from 'react';

import { Container, Input } from './styles';

// eslint-disable-next-line react/prop-types
const Search = ({ handleSubmit, handleChange, placeholder }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          style={{ marginBottom: '5px' }}
        />

        <button type="submit">SEARCH</button>
      </form>
    </Container>
  );
};
export default Search;
