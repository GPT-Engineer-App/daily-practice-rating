import { Container, VStack, Heading, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, useToast, Input, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [rating, setRating] = useState(5);
  const [entries, setEntries] = useState({ Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "" });
  const [submittedEntries, setSubmittedEntries] = useState([]);
  const toast = useToast();

  const handleSubmit = () => {
    setSubmittedEntries([...submittedEntries, { ...entries, rating }]);
    toast({
      title: "Entries Submitted",
      description: `Your entries for the week have been submitted.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleChange = (day, value) => {
    setEntries({ ...entries, [day]: value });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Weekly Language Practice</Heading>
        <Text fontSize="lg">Rate your performance today:</Text>
        <Slider aria-label="performance-rating" defaultValue={5} min={0} max={10} step={1} onChange={(val) => setRating(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Text fontSize="sm">{rating}</Text>
          </SliderThumb>
        </Slider>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <Box key={day} width="100%">
            <Text>{day}:</Text>
            <Input placeholder={`Enter your ${day} entry`} value={entries[day]} onChange={(e) => handleChange(day, e.target.value)} />
          </Box>
        ))}
        <Button colorScheme="blue" onClick={handleSubmit}>Submit Entries</Button>
        <Box width="100%" mt={4}>
          <Heading as="h2" size="lg">Submitted Entries</Heading>
          {submittedEntries.map((entry, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" mb={2}>
              {Object.keys(entry).map((day) => (
                <Text key={day}><strong>{day}:</strong> {entry[day]}</Text>
              ))}
              <Text><strong>Rating:</strong> {entry.rating}/10</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;