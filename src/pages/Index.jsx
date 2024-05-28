import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications.",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white">Home</Link>
          <Link as={RouterLink} to="/products" p={2} color="white">Products</Link>
          <Link as={RouterLink} to="/contact" p={2} color="white">Contact Us</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text>Find the best electronics at unbeatable prices.</Text>
        <Flex wrap="wrap" justifyContent="center">
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} maxW="sm">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Box d="flex" alignItems="baseline">
                  <Heading size="md">{product.name}</Heading>
                </Box>
                <Text mt={2}>{product.description}</Text>
                <Text mt={2} fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;