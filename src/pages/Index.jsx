import { Container, VStack, Heading, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [rating, setRating] = useState(5);
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Rating Submitted",
      description: `You rated your performance as ${rating}/10.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Daily Language Practice</Heading>
        <Text fontSize="lg">Rate your performance today:</Text>
        <Slider aria-label="performance-rating" defaultValue={5} min={0} max={10} step={1} onChange={(val) => setRating(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Text fontSize="sm">{rating}</Text>
          </SliderThumb>
        </Slider>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit Rating</Button>
      </VStack>
    </Container>
  );
};

export default Index;