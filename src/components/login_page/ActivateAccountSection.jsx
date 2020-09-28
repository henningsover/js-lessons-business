import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserKit from '../../data/UserKit';
import { CenteredContainer } from '../../components/global/GlobalStyledComponents';

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 3em;
  padding: 2em;
  width: 100vw;
  background: whitesmoke;
  color: #172341;
  border-radius: 0px;
  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  @media (min-width: 770px) {
    width: 720px;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  margin: 0.5em 0;
`;

const ActivateButton = styled.button`
  width: 10em;
  padding: 0.8em 0;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
  &:hover {
    background: #5981b5;
    transition: background-color 0.2s;
  }
`;

export default function ActivateAccountPage(props) {
  const userKit = new UserKit();
  const history = useHistory();
  const { uid, setUid, token, setToken } = props;

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push('/login');
    });
  }
  return (
    <ContentWrapper as="section">
      <Title>Activate your account</Title>
      <ActivateButton onClick={handleActivateUser}>Activate account</ActivateButton>
    </ContentWrapper>
  );
}
