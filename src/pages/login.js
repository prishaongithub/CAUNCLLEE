import {
  Box,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic
    setError("Login feature is disabled in demo.");
  };

  return (
    <Layout>
    <Box bg="#f7f7f7" minH="100vh" py={10}>
      <Box
        bg="white"
        maxW="500px"
        mx="auto"
        p={8}
        borderRadius="xl"
        boxShadow="md"
      >
        <Heading textAlign="center" mb={6} fontSize="2xl" color="gray.800">
          Login to CAuncle
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Email or Username</FormLabel>
              <Input type="text" name="emailOrUsername" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>

            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}

            <Button type="submit" colorScheme="blue" w="full">
              Login
            </Button>

            <Text>
              Don't have an account?{" "}
              <Link href="/register" style={{ color: "#2b6cb0" }}>
                Register
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
    </Layout>
  );
}
