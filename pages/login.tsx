import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
  
  return (
    <>
      <Head>
        <title>Chatbot UI</title>
        <meta name="description" content="ChatGPT but better." />
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex h-screen w-screen flex-row justify-center items-center text-sm text-white dark:text-white`}>
        <Link href="/api/auth/login">
          <button className="flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10">
            Login
          </button>
        </Link>
        <Link href="/api/auth/logout">
          <button className="flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10">
            Logout
          </button>
        </Link>
      </main>
    </>
  );
};

export default Login;