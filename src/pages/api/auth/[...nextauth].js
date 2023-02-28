import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
//holi holaaaa como haz estado 
// toy tite, y tu?
//no tes tite, estate feli 
// no puelo, pq no me saludaste y 
//tengo sed, todo va mal :((( x
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "650499a5a6d2d5885e18",
      clientSecret: "af91ac2698e893bba1d34dbfd42b7a8b8250a9da",
    }),
  ],
})