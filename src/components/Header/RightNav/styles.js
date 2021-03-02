import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-flow: row nowrap;
  background-color: #a00001;

  a {
    margin-right: 20px;
    font-size: 16px;
    color: #fff;
  }

  img {
    width: 100px;
    height: 70px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #a00001;
    position: fixed;
    align-items: flex-start;
    justify-content: flex-start;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      padding: 10px;
      font-size: 16px;
      color: #fff;
    }

    img {
      display: none;
    }
  }
`;
