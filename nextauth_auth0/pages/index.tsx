import { useSession, signIn, signOut, getSession } from "next-auth/react"
// import { useUser} from '@auth0/nextjs-auth0'

export default function Component() {
  const { data: session } = useSession()

  async function test(){
    const session = await getSession()
    console.log({session})
  }
  test()
  // const {user, error, isLoading } = useUser()
  return (
    <div>
      <h3>test open</h3>
      {
        !session && (
          <>
            Erro doido <br />
            <a href="/api/auth/signin">Entrar</a>

            <button onClick={() => signIn('auth0')}>Sign in</button>
          </>
        )
      }
      {
        session && (
          <>
            Signed in as {session.user?.email} <br />
          <a href="/api/auth/signout">Sair</a>

            <button onClick={() => signOut({redirect: false})}>Sign out</button>
            {/* <button onClick={}>sairr</button> */}
            {/* <a href="http:///api/auth/logout">Sairrr</a> */}
          </>
        )
      }
    </div>
  )
}