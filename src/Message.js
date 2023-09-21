import React from 'react';
import styled from 'styled-components';

// Define um contêiner para a lista de mensagens com uma altura máxima e rolagem vertical.
const MessageListContainer = styled.div`
    max-height: 400px;
    overflow-y: auto;
`;

// Define um parágrafo estilizado.
const P = styled.p`
    margin: 0;
`;

// Define o contêiner para cada mensagem.
const MessageContainer = styled.div`
    background-color: ${(props) => (props.isSenderEmpty ? '#ff0010' : '#f0f0f0')};
    color: ${(props) => (props.isSenderEmpty ? '#fff' : '#000')};
    padding: 10px;
    border-radius: 10px;
    max-width: 30%;
    height: 10%;
    word-wrap: break-word;
    margin: ${(props) => (props.isSenderEmpty ? '0 0 5px 70%' : '0 0 5px 0')};
    border: 2px solid #000;
    cursor: pointer;
`;

// Define o nome do remetente em negrito.
const SenderName = styled.strong`
    display: block;
`;

// Define a adição do momento de envio à mensagem.
const TimeStamp = styled.h6`
    font-size: 9px;
    text-align: right;
    margin: 0;
`;

function Message({ sender, message, timeStamp, onDelete }) {
    // Verifica se o nome do remetente está vazio ou igual a 'eu'.
    const isSenderEmpty = sender.trim().toLowerCase() === '' || sender.trim().toLowerCase() === 'eu';

    return (
        <MessageListContainer>
            {/* Renderiza o contêiner da mensagem com base no remetente. */}
            <MessageContainer isSenderEmpty={isSenderEmpty} onDoubleClick={onDelete}>
                {!isSenderEmpty ? (
                    // Renderiza o nome do remetente se não estiver vazio.
                    <SenderName>{sender}</SenderName>
                ) : (
                    // Caso contrário, renderiza 'Você'.
                    <SenderName>
                        <strong>Você</strong>
                    </SenderName>
                )}
                {/* Renderiza o conteúdo da mensagem */}
                <P>{message}</P>
                {/* Renderiza o carimbo de data e hora da mensagem. */}
                <TimeStamp>{timeStamp}</TimeStamp>
            </MessageContainer>
        </MessageListContainer>
    );
}

export default Message;
