import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 10px;
    width: 100px;
    outline: 0;
    border: 0;
    padding: 10px;
    border-radius: 05px;
    background: #a00001;
    color: #fff;

    transition: opacity 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  width: 70vw;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  box-shadow: none;
  background: #555;
  outline: 0;
  border: 0;
`;
