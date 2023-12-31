import Head from "next/head";
import Link from "next/link";
import { useSession,signIn,signOut } from "next-auth/react";


export default function Home() {
  // const {data:session}=useSession()
  // if(!session){
  //   return(<p>No session</p>)
  // }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            0xNunana <span className="text-[hsl(280,100%,70%)]">Drive</span> 
          </h1>
        
<div>
  <Link href='/dashboard'>
  <p className="bg-white py-2 px-7 text-2xl " >Sign Up!</p>
  </Link>
 
  
</div>

        </div>
      </main>
    </>
  );
}
