import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading mb={4}>Todo App Bro</Heading>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="md"
          width="100%"
        />
        <Button onClick={handleAddTodo} colorScheme="green" px={8}>
          Add
        </Button>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              {todo}
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleDeleteTodo(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
