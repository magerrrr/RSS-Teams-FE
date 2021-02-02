import React from 'react';
import { Redirect } from 'react-router-dom';

async function getAccessToken(code: string) {
  const authurl = `https://rss-teams-fe-cors.herokuapp.com/authenticate/${code}`;
  let res;
  try {
    res = await fetch(authurl);
    return res;
  } catch (e) {
    console.log(`getAccessToken request failed: ${e}`);
    return null;
  }
}

async function getGitUser(token: Promise<string> | null) {
  if (!token) return null;
  let res;
  try {
    res = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    return res;
  } catch (e) {
    console.log(`getGitUser request failed: ${e}`);
    return null;
  }
}

type TGitAuth = {
  props: any;
  setLogged: (lstate: boolean) => void;
  setGithubId: (githubId: string) => void;
};

export const CallBack: React.FC<TGitAuth> = ({
  props,
  setLogged,
  setGithubId,
}) => {
  const {
    location: { search },
  } = props;

  const url = new URLSearchParams(search);
  const code = url.get('code');
  // let token: Promise<string> | null = null; //'not ready';
  console.log('url=', url, '50code=', code);
  if (code) {
    getAccessToken(code) // state
      .then((response) => (response ? response.json() : null))
      .then((data) => {
        // token = data?.token;
        return getGitUser(data?.token);
      })
      .then((response) => (response ? response.json() : null))
      .then((data) => {
        console.log('2then', data);
        const { login } = data;
        setGithubId(login);
        setLogged(true);
        // setCookie('login', login);
      })
      .catch((data) => console.log('catch', data));
  }

  return <Redirect to="/" />;
};
