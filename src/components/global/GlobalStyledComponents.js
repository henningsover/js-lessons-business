import React from 'react';
import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding-top: 1em;

  @media (min-width: 800px) {
    width: 90vw;
    margin: auto;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 450px) {
    display: grid;
    gap: 10px;
    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonStyled = styled.button`
  padding: 0.8em 0;
  background: #496385;
  color: whitesmoke;
  border-style: none;
`;
