import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jairo Júnior</Text>
          <Text color="gray.300" fontSize="small">
            jairojunior.bastos@ymail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jairo Júnior" src="https://github.com/jairojuniorjj.png" />
    </Flex>
  )
}