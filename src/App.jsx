import './App.css';
import Sidebar from "./sidebar.jsx";
import ChatWindow from "./chatWindow.jsx";
import { MyContext } from "./MyContext.jsx"; 
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"; 

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  
  // 1. Using v4 for cleaner random IDs
  const [currThreadId, setCurrThreadId] = useState(uuidv4());
  
  // 2. This will store the actual objects {role: "user", content: "..."}
  const [prevChats, setPrevChats] = useState([]); 
  
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  // 3. Passing the values to the rest of the app
  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  }; 

  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
          <Sidebar />
          <ChatWindow />
      </MyContext.Provider>
    </div>
  );
}

export default App;