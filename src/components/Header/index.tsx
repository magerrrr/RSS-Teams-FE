import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { setGithubId } from 'service/cookies';
const LogoutButton = styled.button``;

const logOut = () => {
  setGithubId('');
  window.location.pathname = '/login';
  // return <Redirect to="/login" />;
};

export const Header: React.FC = () => {
  return <LogoutButton onClick={logOut}>Logout</LogoutButton>;
};
