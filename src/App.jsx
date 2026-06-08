import {useState} from 'react';
function App() {
 

    const Messages = ({text}) => {
        
  return (
  <>
     <p>{text}</p>
  </>
  );

    }
/*
    const messages = [
    "John: Hello everyone!",
    "Jane: Hi John!",
    "Bob: Hey everyone!",
    ];
    */
    const [messages, setMessages] =useState([]);

  return (
    <>
      <h1>Chatroom App</h1> 

       {messages.map(
       (text) => <Messages text={text} />
       )
       }
    
       <input />
       <button>Send</button>
    </>
    
  )
}

export default App