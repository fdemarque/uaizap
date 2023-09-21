import React from 'react';
import styled from 'styled-components';

const MessageListContainer = styled.div`
    max-height: 400px; 
    overflow-y: auto; 
`;
const P = styled.p`
    margin:0;
`
const MessageContainer = styled.div`
    background-color: ${(props) => (props.isSenderEmpty ? '#ff0010' : '#f0f0f0')};
    color: ${(props) => (props.isSenderEmpty ? '#fff' : '#000')};
    padding: 10px;
    border-radius: 10px;
    max-width: 30%;
    height:10%;
    word-wrap: break-word;
    margin: ${(props) => (props.isSenderEmpty ? '0 0 5px 70%' : '0 0 5px 0')};
    border: 2px solid #000; 

`;

const SenderName = styled.strong`
    display: block;
    
`;

const TimeStamp = styled.h6`
    font-size: 12px;
    text-align: left;
    color: #777;
    margin:0;
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
                <P>{message}</P>
                <TimeStamp>{timeStamp}</TimeStamp>
            </MessageContainer>
        </MessageListContainer>
    );
}

export default Message;
