import React, { useState, useEffect } from 'react'
import './app.css'
import Message from './components/Message'
import FlipMove from 'react-flip-move';
import { FormControl, Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import db from './fireBase/Firebase';
import firebase from 'firebase'

function App() {
    const [input, setInput] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setUsername(prompt("Enter Username (Facebook messenger)"))
        setEmail(prompt("Enter Email (Facebook messenger)"))
        setPassword(prompt("Enter Password (Facebook messenger)"))
    }, [])

    useEffect(() => {
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
    }, [])

    function sendmessage(e) {
        e.preventDefault()
        db.collection('messages').add({
            message: input,
            username: username,
            email: email,
            password: password,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    return (
        <React.Fragment>
            <div className="app">
                <h1>Welcome To Messenger</h1>
                <img src="https://lh3.googleusercontent.com/rkBi-WHAI-dzkAIYjGBSMUToUoi6SWKoy9Fu7QybFb6KVOJweb51NNzokTtjod__MzA=s180-rw"></img>
            </div>
            <div className='messages'>
                <FlipMove>
                    {messages.map((message, index) =>
                        <Message
                            key={index}
                            username={username}
                            message={message}
                        />
                    )}
                </FlipMove>
            </div>
            <form onSubmit={sendmessage}>
                <FormControl className="inputMessage">
                    <Input value={input} onChange={e => setInput(e.target.value)} className="abc" placeholder="Enter Message" aria-describedby="my-helper-text" />
                    <SendIcon onClick={sendmessage} disabled={!input} type="submit" className="bcd"></SendIcon>
                </FormControl>
            </form>

        </React.Fragment>
    )

}

export default App