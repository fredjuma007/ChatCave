import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />; //if the user exists, show the AuthPage
  } else {
    return <ChatsPage user={user} />; //if the does exist, show the ChatsPage
  }
}

export default App;