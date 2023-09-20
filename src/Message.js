import React from 'react';
import styled from 'styled-components';

const MessageListContainer = styled.div`
    max-height: 400px; /* Altura máxima para habilitar a rolagem */
    overflow-y: auto; /* Adiciona rolagem vertical quando necessário */
`;

const MessageContainer = styled.div`
    background-color: ${(props) => (props.isSenderEmpty ? '#007bff' : '#f0f0f0')};
    color: ${(props) => (props.isSenderEmpty ? '#fff' : '#000')};
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    max-width: 70%;
    word-wrap: break-word;
    align-self: ${(props) => (props.isSenderEmpty ? 'flex-end' : 'flex-start')};
`;

const SenderName = styled.strong`
    display: block;
    margin-bottom: 5px;
`;

const TimeStamp = styled.h6`
    font-size: 12px;
    text-align: right;
    color: #777;
`;

function Message({ sender, message, timeStamp, onDelete }) {
    const isSenderEmpty = sender.trim().toLowerCase() === '' || sender.trim().toLowerCase() === 'eu';

    return (
        <MessageListContainer>
            <MessageContainer isSenderEmpty={isSenderEmpty} onDoubleClick={onDelete}>
                {!isSenderEmpty ? (
                    <SenderName>{sender}</SenderName>
                ) : (
                    <SenderName>
                        <strong>Você</strong>
                    </SenderName>
                )}
                <p>{message}</p>
                <TimeStamp>{timeStamp}</TimeStamp>
            </MessageContainer>
        </MessageListContainer>
    );
}

export default Message;
