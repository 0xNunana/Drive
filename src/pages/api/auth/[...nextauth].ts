import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {  // Configure one or more authentication providers  
    providers: [
        // GoogleProvider(<GoogleAuth>{
        //   clientId: process.env.GOOGLE_CLIENT_ID,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),
        GitHubProvider(<GihubAuth>{
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ],
       secret: process.env.NEXTAUTH_SECRET


    }
export default NextAuth(authOptions);
