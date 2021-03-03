import React from 'react';

import { Container, Overlay, Title } from './styles';

function NotFound404() {
  return (
    <Container>
      <Overlay>
        <Title>
          A página que você requisitou não foi encontrada ou encontra-se em
          construção
        </Title>
      </Overlay>
    </Container>
  );
}

export default NotFound404;
