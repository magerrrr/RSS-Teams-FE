import React, { FC } from 'react';
import { Logo } from 'typography';

function randomString(i: number) {
  let rnd = '';
  while (rnd.length < i) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, i);
}

export const LoginPage: FC = () => {
  const clientId = '71db47fbabc6c43570fa';
  const state = randomString(12);
  const redirectUri = 'https://localhost:3000/callback';
  const authHref = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  return (
    <div>
      <Logo />
      <p>This is login page!</p>
      <a href={authHref}>Login with GitHub</a>
    </div>
  );
};
