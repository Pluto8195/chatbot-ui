// pages/api/auth/login.js
import { handleLogin } from '@auth0/nextjs-auth0';

export default async function login(req, res) {
  try {
    await handleLogin(req, res, {
      authorizationParams: {
        prompt: 'login',
      },
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}