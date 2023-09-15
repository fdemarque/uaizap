import React, { useState } from 'react';
import './App.css';
import Message from './Message';
import Icone from './imagens/icon.png';
import Enviar from './imagens/trem.png';

function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [senderName, setSenderName] = useState('');

    const deleteMessage = (id) => {
      const updatedMessages = messages.filter((message, index) => index !== id);
      setMessages(updatedMessages);
    };
  

    const addMessage = (sender, message) => {
        const momento = new Date().toLocaleTimeString();
        setMessages([...messages, { sender, message, timestamp: momento}]);
    };

    const handleSend = () => {
        const momento = new Date().toLocaleTimeString();
        if (userInput.trim() !== '') {
            if (senderName ===''){
                addMessage(senderName, userInput, momento);
                setUserInput('');
            }else{
                addMessage(senderName, userInput, momento);
                setSenderName('');
                setUserInput('');
            };
        };
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-container">
            <header className="header">
                <img src={Icone} alt="Ícone" className="icon" />
                <h3>UaiZAP</h3>
            </header>
            <div className="message-history">
              {messages.map((message, id) => (
                <Message
                    key={id}
                    sender={message.sender}
                    message={message.message}
                    time={message.momento}
                    onDelete={() => deleteMessage(id)}
                    isLeft={message.sender !== ''}
                />
              ))}
            </div>
            <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Seu Nome"
            />
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
                placeholder="Digite sua mensagem"
            />
            <button onClick={handleSend}>
                <img src={Enviar} alt="Enviar" className="botao-de-envio" />
            </button>
        </div>
    );
}

export default ChatComponent;
