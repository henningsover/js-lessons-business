import React from 'react';
import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 90vw;
  margin: auto;
  padding-top: 1em;
`;

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  grid-column-start: 2;
  width: 10em;
  padding: 0.8em 0;
  justify-self: end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
`;
