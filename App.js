import { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Login from "./app/Login";
import TodoList from "./app/TodoList";
import { auth } from "./app/fbConfig";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const _user = auth.currentUser;
    setUser(_user);
  }, [auth]);

  return (
    <NativeBaseProvider>
      <Box>
        <Text>Todo App</Text>
        {!user ? <Login /> : <TodoList />}
      </Box>
    </NativeBaseProvider>
  );
}
