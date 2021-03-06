/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
require('dotenv').config();

const BACKEND_LINK = `export const BACKEND_LINK = 'https://rss-teams.herokuapp.com/graphql';
`;

const AUTH_BACKEND_LINK = `export const AUTH_BACKEND_LINK = 'https://rss-teams.herokuapp.com/auth/github/';
`;

fs.writeFileSync('./src/appConstants/api.ts', BACKEND_LINK + AUTH_BACKEND_LINK);
