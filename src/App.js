import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import icone from './imagens/icon.png';
import background from './imagens/background.png';
import trem from './imagens/trem.png';

const ChatContainerWrapper = styled.div`
    /* Estilos para o container geral */
    background: url(${background}) fixed;
    background-repeat: repeat-y;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 40px;
    height: 91.4vh;
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
`;

const Header = styled.header`
    /* Estilos para o cabeçalho */
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;

    img {
        width: 50px;
        height:50px;
    }
`;

const MessageHistoryWrapper = styled.div`
    /* Estilos para o histórico de mensagens */
    margin-top: 20px;
    max-height: calc(91.4vh - 100px);
    overflow-y: auto;
    z-index: 2;  
`;

const InputWrapper = styled.div`
    /* Estilos para o campo de entrada de texto e botão */
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 99%; /* Define a largura máxima desejada */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #ffffff; /* Adicione uma cor de fundo se desejar */
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1); /* Adicione sombra se desejar */

    input[type='text'] {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-image: url(${trem});
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center;
    
        color: #fff;
        border: none;
        border-radius: 5px;
        width: 30px; 
        height: 30px; 
        padding: 20px;
        cursor: pointer;
    }    
`;


function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [senderName, setSenderName] = useState('');

    const deleteMessage = (id) => {
        const updatedMessages = messages.filter((message, index) => index !== id);
        setMessages(updatedMessages);
    };

    const addMessage = (sender, message, momento) => {
        setMessages([...messages, { sender, message, timestamp: momento }]);
    };

    const handleSend = () => {
        const momento = new Date().toLocaleTimeString();
        if (userInput.trim() !== '') {
            addMessage(senderName, userInput, momento);
            if ((senderName === '') && (senderName === 'Eu')) {
                setUserInput('');
            } else {
                setSenderName('');
                setUserInput('');
            }
        }
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
        <ChatContainerWrapper>
            <Header>
                <img src={icone} alt="Ícone"/>
            </Header>
            <MessageHistoryWrapper>
                {messages.map((message, id) => (
                    <Message
                        key={id}
                        sender={message.sender}
                        message={message.message}
                        timeStamp={message.timestamp}
                        onDelete={() => deleteMessage(id)}
                        isLeft={message.sender !== ''}
                    />
                ))}
            </MessageHistoryWrapper>
            <InputWrapper>
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
                <button onClick={handleSend}></button>
            </InputWrapper>
        </ChatContainerWrapper>
    );
}

export default ChatComponent;
