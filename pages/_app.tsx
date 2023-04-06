import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <UserProvider>
      <div className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default appWithTranslation(App);
