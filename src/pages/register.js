import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: replace with API call
    setError("Registration is disabled in this demo.");
  };

  return (
    <Layout>
    <Box bg="#f7f7f7" minH="100vh" py={10}>
      <Box
        bg="white"
        maxW="900px"
        mx="auto"
        p={10}
        borderRadius="xl"
        boxShadow="md"
      >
        <Heading textAlign="center" mb={8} fontSize="2xl" color="gray.800">
          Register for CAuncle 🧾
        </Heading>

        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input name="name" placeholder="Enter first name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input name="lname" placeholder="Enter last name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" name="email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
          </SimpleGrid>

          {error && (
            <Alert status="error" mt={6} justifyContent="center">
              <AlertIcon />
              {error}
            </Alert>
          )}

          <Button type="submit" colorScheme="green" mt={8} w="full">
            Register
          </Button>

          <Text mt={4} textAlign="center">
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#2b6cb0" }}>
              Login
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
    </Layout>
  );
}
