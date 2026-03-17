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
import { useRouter } from "next/router";
import { setToken } from "@/utils/auth"; // util to set token in cookie
import Layout from "@/components/Layout";

export default function Login() {
  const [error, setError] = useState("");
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      setToken("valid-token"); // Set cookie on client
      router.push("/home"); // Redirect after login
    } catch (err) {
      setError(err.message);
    }
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
                <Input
                  type="text"
                  name="emailOrUsername"
                  value={form.emailOrUsername}
                  onChange={(e) =>
                    setForm({ ...form, emailOrUsername: e.target.value })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
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