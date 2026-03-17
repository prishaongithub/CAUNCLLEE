import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Container,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* WELCOME SECTION */}
      <Box bgGradient="linear(to-r, #fcfcfc, #ffffff)" minH="100vh" display="flex" alignItems="center">
        <Container maxW="7xl" py={12}>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
            {/* Uncle Image */}
            <Box flex="1" textAlign="center">
              <Image
                src="/images/uncle.png"
                alt="CA Uncle"
                maxH="450px"
                mx="auto"
                borderRadius="lg"
              />
            </Box>

            {/* Welcome Text */}
            <Box flex="1" textAlign={{ base: "center", md: "left" }} mt={{ base: 8, md: 0 }} px={4}>
              <Heading size="lg">Welcome, BETE 👋</Heading>
              <Text mt={4} fontSize="lg">
                I’m your non-judgemental, calm, and pretend Gen-Z <strong>CAuncle</strong>.<br />
                I’ve got all the time in the world to guide you — only when <strong>you’re in the mood to be guided.</strong>
              </Text>
              <Link href="#about">
                <Button colorScheme="gray" mt={6} px={6} py={4} rounded="full">
                  Start Exploring
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Box id="about" py={16} bg="gray.50">
        <Container maxW="7xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex="1" mb={{ base: 8, md: 0 }} order={{ base: 2, md: 1 }} px={4}>
              <Heading as="h2" size="xl" mb={4}>Why me?</Heading>
              <Text mb={4}>
                Bete, I’ve been around long enough to know one thing — money talk scares people. Tax forms, bills, deductions... it’s like a foreign language, right?
              </Text>
              <Text mb={4}>
                But here’s the good news: you don’t have to figure it out alone. I’m your <strong>CAuncle</strong> — calm, patient, and just a search away (no appointment needed).
              </Text>
              <Text mb={4}>
                Whether you're a student confused about your first salary, a freelancer juggling receipts, or someone who just wants to stop running from taxes — I’ve got you.
              </Text>
              <Text>
                No big words. No judgment. Just simple steps, some reminders, and a whole lot of support — exactly when you feel like getting your life together.
              </Text>
              <Link href="#how">
                <Button mt={6} colorScheme="gray">
                  Explore Features
                </Button>
              </Link>
            </Box>

            <Box flex="1" px={4} order={{ base: 1, md: 2 }}>
              <Image
                src="/images/why need us.webp"
                alt="Why wnaCA"
                borderRadius="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Box id="how" py={16}>
        <Container maxW="7xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex="1" px={4}>
              <Image
                src="/images/how it works.jpeg"
                alt="How it works"
                borderRadius="lg"
              />
            </Box>

            <Box flex="1" px={4} mt={{ base: 8, md: 0 }}>
              <Heading as="h2" size="xl" mb={4}>
                How I Work?
              </Heading>
              <List spacing={3} fontSize="lg">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Sign Up or Log In:</strong> Create your account in seconds — no paperwork.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Answer a Few Questions:</strong> Customized for you — student, freelancer, or hustler.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Upload Your Documents:</strong> Drag, drop, and chill. We’ll do the hard stuff.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Get Smart Deductions:</strong> Find all the tax-saving opportunities!
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>File Your Returns:</strong> One click and you're done. ✅
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Wait!</strong> There's more — if you file your taxes sincerely, you get REWARDS!
                </ListItem>
              </List>
              <Link href="#rewards">
                <Button mt={6} variant="outline" colorScheme="gray">
                  See Rewards
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* REWARDS */}
      <Box id="rewards" bg="gray.50" py={16}>
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Rewards 🎁
          </Heading>
          <Text fontSize="lg">
            File smart. Earn rewards. We'll tell you more soon!
          </Text>
        </Container>
      </Box>
    </>
  );
}
