import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"} minH="100vh">
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
