import {useState} from 'react';
// @ts-expect-error
import Message from './components/Message';
// @ts-expect-error
import './App.css';

const App = () => {
    //
    // business logic
    //

    /*
    const messages = [
        "Argentina",
        "Bolivia",
        "Cambodia",
    ];
    */

    const [messages, setMessages] = useState([]);

    return <>
        <h1>
            Chatroom
        </h1>

        {
            messages.map(
                (text, index) => <Message key={index} text={text} />
                )
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = event.target.incoming_text.value;

            // add the new message to the message state
            // @ts-expect-error
            setMessages([...messages, new_message]);

            // note: this is not best practice in react but it works for now
            // @ts-expect-error
            document.getElementById('incoming_text').value = '';
        }}>
        <input name='incoming_text' id='incoming_text' />
        <button type='submit'>
            send
        </button>
        </form>
    </>;
}

export default App;