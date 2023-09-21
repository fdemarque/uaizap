import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import icone from './imagens/icon.png';
import background from './imagens/background.png';
import trem from './imagens/trem.png';

// estilização da div pai
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

// estilização do cabeçalho
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

// estilização do histórico de mensagens
const MessageHistoryWrapper = styled.div`
    /* Estilos para o histórico de mensagens */
    margin-top: 20px;
    max-height: calc(91.4vh - 100px);
    overflow-y: auto;
    z-index: 2;  
`;

// estilização dos componentes referentes ao envio de mensagens
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
        width: 10px; 
        height: 30px; 
        padding: 20px;
        cursor: pointer;
    }    
`;

// Componente principal do chat
function ChatComponent() {
    // Estados para armazenar mensagens, entrada do usuário e nome do remetente
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [senderName, setSenderName] = useState('');

    // Função para excluir uma mensagem com base no índice
    const deleteMessage = (id) => {
        const updatedMessages = messages.filter((message, index) => index !== id);
        setMessages(updatedMessages);
    };

    // Função para adicionar uma nova mensagem ao histórico
    const addMessage = (sender, message, momento) => {
        setMessages([...messages, { sender, message, timestamp: momento }]);
    };

    // Função para lidar com o envio de uma mensagem
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

    // Função para atualizar o estado da entrada do usuário
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Função para lidar com o pressionamento da tecla "Enter" para enviar mensagem
    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    // Renderiza a interface do chat
    return (
        <ChatContainerWrapper>
            {/* Cabeçalho com ícone */}
            <Header>
                <img src={icone} alt="Ícone"/>
            </Header>
            {/* Histórico de mensagens */}
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
            {/* Campo de entrada de texto e botão */}
            <InputWrapper>
                {/* Input para o nome do remetente */}
                <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Seu Nome"
                />
                {/* Input para a mensagem do usuário */}
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyPress}
                    placeholder="Digite sua mensagem"
                />
                {/* Botão para enviar mensagem */}
                <button onClick={handleSend}></button>
            </InputWrapper>
        </ChatContainerWrapper>
    );
}

// Exporta o componente ChatComponent para uso em outros lugares
export default ChatComponent;
