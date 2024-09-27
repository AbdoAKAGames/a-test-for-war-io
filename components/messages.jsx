import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import '../game.css';

const SOCKET_SERVER_URL = 'http://localhost:2000'; // Replace with your server URL

export function Messages({ messagesContent }) {
    const [currentChat, setCurrentChat] = useState('');
    const socketRef = useRef();

    const username = localStorage.getItem("name");
    
    function sendMessage(){
        const input = document.getElementById('msg');
        if (input.value) {
            socketRef.current.emit('message', {msg: input.value, username: username, id: socketRef.current.id})
            input.value = ""
        }
        input.focus()
    }

    useEffect(() => {
        // Connect to the socket server
        socketRef.current = io(SOCKET_SERVER_URL);

        // Listen for incoming messages
        socketRef.current.on('message', data => {
            const li = document.createElement('li');
            li.innerHTML = data.msg + `<span class="date">${new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}${new Date().getHours() > 11 ? ' PM' : ' AM'}</span>`;
            if (data.id === socketRef.current.id) {
                li.className = 'out';
            } else if (data.username === 'sys') {
                li.className = 'sys';
            } else {
                li.className = 'in';
            }
            li.classList.add('message-li')
            if (document.getElementById('ul'))
            document.getElementById('ul').append(li);
        });

        socketRef.current.emit('username', username);

        // Clean up the connection on component unmount
        return () => {
            socketRef.current.disconnect();
        };
    }, []);


    function openWorldChat() {
        setCurrentChat('world-chat');
    }

    return (
        <>
            <div className="messages_content item_content" ref={messagesContent}>
                <div className="messages_content_title item_content_title">
                    <div className="messages_content_title_text item_content_title_text">
                        MESSAGES
                    </div>
                </div>
                <div className="messages-container">
                    <div className="messages">
                        {currentChat === 'world-chat' && (
                            <>
                            <form onSubmit={e => {e.preventDefault();sendMessage()}}>
                                <input type="text" id='msg' />
                                <button type="submit">Send</button>
                            </form>
                            <ul id='ul'></ul>
                            
                            </>
                        )}
                        {currentChat === '' && (
                            <div className="open-world-chat" onClick={openWorldChat}>
                                <button className="world-chat-btn">World Chat</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}