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
    const isSenderEmpty = ((sender.trim() === '')||(sender.trim() === 'Eu')||(sender.trim() === 'eu'));
    const messageStyle = {
        padding: '5px',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
        textAlign: isSenderEmpty ? 'right' : 'left',
        class: isSenderEmpty ? 'right-message' : 'left-message',
    };

    if ((sender.trim() === "")||(sender.trim() === "Eu")||(sender.trim() === "eu")){
        return (
            <div
                onDoubleClick={onDelete}
                style={messageStyle}
                className={messageStyle.class}
            >
                <strong>Você</strong>
                <p>{message}</p>
                <h6>{timeStamp}</h6>
            </div>
        );
    }else{
        return (
            <div
                onDoubleClick={onDelete}
                style={messageStyle}
                className={messageStyle.class}
            >
                <strong>{sender}</strong>
                <p>{message}</p>
                <h6>{timeStamp}</h6>
            </div>
        );
    }

}

export default Message;
