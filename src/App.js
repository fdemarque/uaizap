// import React, { useState } from 'react';
// import Message from './Message';
// import Icone from './imagens/icon.png';

// function ChatComponent() {
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState('');
//     const [senderName, setSenderName] = useState('');

//     const deleteMessage = (id) => {
//       const updatedMessages = messages.filter((message, index) => index !== id);
//       setMessages(updatedMessages);
//     };
  

//     const addMessage = (sender, message, momento) => {
//         setMessages([...messages, { sender, message, timestamp: momento}]);
//         console.log (messages);
//     };

//     const handleSend = () => {
//         const momento = new Date().toLocaleTimeString();
//         if (userInput.trim() !== '') {
//             addMessage(senderName, userInput, momento);
//             if ((senderName === '')&&(senderName === 'Eu')){
//                 setUserInput('');
//             }else{
//                 setSenderName('');
//                 setUserInput('');
//             };
//         };
//     };

//     const handleInputChange = (event) => {
//         setUserInput(event.target.value);
//     };

//     const handleInputKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             handleSend();
//         }
//     };

//     return (
//         <div className="chat-container">
//             <header className="header">
//                 <img src={Icone} alt="Ícone" className="icon" />
//                 <h3>UaiZAP</h3>
//             </header>
//             <div className="message-history">
//               {messages.map((message, id) => (
//                 <Message
//                     key={id}
//                     sender={message.sender}
//                     message={message.message}
//                     timeStamp={message.timestamp}
//                     onDelete={() => deleteMessage(id)}
//                     isLeft={message.sender !== ''}
//                 />
//               ))}
//             </div>
//             <input
//                 type="text"
//                 value={senderName}
//                 onChange={(e) => setSenderName(e.target.value)}
//                 placeholder="Seu Nome"
//             />
//             <input
//                 type="text"
//                 value={userInput}
//                 onChange={handleInputChange}
//                 onKeyDown={handleInputKeyPress}
//                 placeholder="Digite sua mensagem"
//             />
//             <button onClick={handleSend}>Enviar</button>
//         </div>
//     );
// }

// export default ChatComponent;

import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import Icone from './imagens/icon.png';

const ChatContainerWrapper = styled.div`
    /* Estilos para o container geral */
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
`;

const Header = styled.header`
    /* Estilos para o cabeçalho */
    text-align: center;

    img {
        width: 50px;
        height: 50px;
    }
`;

const MessageHistoryWrapper = styled.div`
    /* Estilos para o histórico de mensagens */
    margin-top: 20px;
`;

const InputWrapper = styled.div`
    /* Estilos para o campo de entrada de texto e botão */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    input[type='text'] {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
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
                <img src={Icone} alt="Ícone" />
                <h3>UaiZAP</h3>
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
                <button onClick={handleSend}>Enviar</button>
            </InputWrapper>
        </ChatContainerWrapper>
    );
}

export default ChatComponent;
