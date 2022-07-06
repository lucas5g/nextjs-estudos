import { Box, Flex } from "@chakra-ui/react";
import { Topbar } from "./Topbar";

export function Layout({ children }) {
    return (
        <Box
            bgColor={'#f4f6f8'}
            minH="100vh"
        >
            <Topbar />
            <Flex 
                flexDirection={'column'}
                pt='62px'
                >
                {children}
            </Flex>
        </Box>
    )
}