import React from 'react';
import { Container, LoadingioSpinner, Ldio } from './styles';

function Loading() {
  return (
    <Container>
      <LoadingioSpinner>
        <Ldio>
          <div />
          <div>
            <div />
          </div>
        </Ldio>
      </LoadingioSpinner>
    </Container>
  );
}

export default Loading;
