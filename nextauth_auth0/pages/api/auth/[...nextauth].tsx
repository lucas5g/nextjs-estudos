import NextAuth from "next-auth"
import Auth0Provider from 'next-auth/providers/auth0'
// import GithubProvider from "next-auth/providers/github"

export default NextAuth({

  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      //@ts-ignore
      clientId: process.env.AUTH0_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      authorizationUrl: `${process.env.AUTH0_ISSUER}/authorize?response_type=code&prompt=login`
    }),
    // ...add more providers here
  ],
  secret: 'bundalele'
})