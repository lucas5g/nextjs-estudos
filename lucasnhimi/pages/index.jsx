import { useRouter } from "next/router"
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"

export default function Home() {

    const { user, signin } = useAuth()

    console.log({ user })
    return (
        <div>
            <h1>test </h1>
            <button onClick={
                () => signin()} >
                Entrar com o github
            </button>
        </div>
    )
}