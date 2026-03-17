import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { logoutUser } from "../utils/auth"; // we'll create this file soon

export default function Navbar({ user = null, hideNavLinks = false }) {
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();     // clears the token
    router.push("/login");  // redirect to login page
  };

  return (
    <Box bg="#fdfcfc" px={6} py={4} position="sticky" top={0} zIndex={999} shadow="sm">
      <Flex align="center" justify="space-between" maxW="8xl" mx="auto">
        {/* Brand */}
        <NextLink href="/" passHref>
          <ChakraLink fontWeight="bold" fontSize="lg">
            CAuncle
          </ChakraLink>
        </NextLink>

        {/* Nav Links */}
        {!hideNavLinks && (
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="/#about" scroll={false}>About Us</Link>
          <Link href="/#how" scroll={false}>Working</Link>
          <Link href="/#rewards" scroll={false}>Rewards</Link>
          <Link href="/#contact" scroll={false}>Contact</Link>
          </HStack>   

        )}

        {/* User Section */}
        <Box>
          {!user ? (
            <HStack spacing={3}>
              <NextLink href="/register" passHref>
                <ChakraLink>Register</ChakraLink>
              </NextLink>
              <NextLink href="/login" passHref>
                <Button colorScheme="gray" rounded="full" px={6}>
                  Login
                </Button>
              </NextLink>
            </HStack>
          ) : (
            <Menu>
              <MenuButton as={Button} variant="ghost">
                <HStack>
                  <Avatar size="sm" src="/images/profile.png" />
                  <Text display={{ base: "none", md: "block" }}>
                    Hi, {user.name || "User"}
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <Box px={4} py={2}>
                  <Text fontWeight="bold">👋 Welcome, {user.name || "User"}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {user.email}
                  </Text>
                </Box>
                <MenuDivider />

                <NextLink href="/account" passHref>
                  <MenuItem as={ChakraLink}>⚙️ Account Settings</MenuItem>
                </NextLink>

                <NextLink href="/uploads" passHref>
                  <MenuItem as={ChakraLink}>
                    📂 Uploaded Docs: <strong>&nbsp;{user.uploadedDocs || 0}</strong>
                  </MenuItem>
                </NextLink>

                <NextLink href="/rewards" passHref>
                  <MenuItem as={ChakraLink}>
                    🎁 Reward Points: <strong>&nbsp;{user.rewardPoints || 0}</strong>
                  </MenuItem>
                </NextLink>

                <MenuDivider />
                <MenuItem onClick={handleLogout} color="red.500">
                  🚪 Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
