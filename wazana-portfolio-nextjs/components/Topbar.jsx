import { Box, Flex } from "@chakra-ui/react";

export function Topbar() {
    return (
        <Flex
            w='full'
            position='fixed'
            zIndex={99999}
            bgColor={'#fff'}
            color={'#1a202c'}
            borderBottom={'1px solid #ddd'}
        >
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                w='full'
                maxW='1200px'
                margin='0 auto'
                h='60px'
                px={[4, 8]}


            >
                <Box>
                    Lucas de Sousa
                </Box>
                <Box>
                    Login
                </Box>
            </Flex>
        </Flex>
    )
}