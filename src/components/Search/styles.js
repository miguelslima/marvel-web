import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

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
    opacity: 0.7;
  }

  @media (max-width: 1080px) {
    flex-direction: column;

    form {
      text-align: center;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    form {
      text-align: center;
      margin-bottom: 10px;
    }
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

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
