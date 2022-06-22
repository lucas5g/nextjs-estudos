import { Box, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"

export default function Home() {

    const { user, signin } = useAuth()

    console.log({ user })
    return (

        <Box bg="gray.100" w="100%" p={4} >
            <Heading as="h2" sizi="3xl" isTruncated>
                Aprenda programaçao direto ao ponto

            </Heading>
        </Box>
    )
}