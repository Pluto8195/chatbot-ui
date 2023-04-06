// pages/api/auth/[...auth0].js
import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import loginHandler from './login';

export default handleAuth({
  async login(req, res) {
    try {
      await loginHandler(req, res);
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, { redirectTo: '/' });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});