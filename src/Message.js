// import React from 'react';

// function Message({ sender, message, momentoFormatado, onDelete }) {
//     const isSenderEmpty = sender.trim() === '';
//     const messageStyle = {
//         padding: '5px',
//         borderRadius: '5px',
//         margin: '5px',
//         cursor: 'pointer',
//         textAlign: isSenderEmpty ? 'right' : 'left',
//     };
//     if (sender !== ""){
//         return (
//             <div
//                 onDoubleClick={onDelete}
//                 style={messageStyle}
//                 className={isSenderEmpty ? 'right-message' : 'left-message'}
//             >
//                 <strong>{sender}</strong><p/>{message}<p/>{momentoFormatado}
//             </div>
//         );    
//     }else{
//         return (
//             <div
//                 onDoubleClick={onDelete}
//                 style={messageStyle}
//                 className={isSenderEmpty ? 'right-message' : 'left-message'}
//             >
//                 {message}<p/>{momentoFormatado}
//             </div>
//         ); 
//     }
// }

// export default Message;

import React from 'react';

function Message({ sender, message, momentoFormatado, onDelete }) {
    const isSenderEmpty = sender.trim() === '';
    const messageStyle = {
        padding: '5px',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
        textAlign: isSenderEmpty ? 'right' : 'left',
        class: isSenderEmpty ? 'right-message' : 'left-message',
    };


    return (
        <div
            onDoubleClick={onDelete}
            style={messageStyle}
            className={messageStyle.class}
        >
            <strong>{sender}</strong>
            <p>{message}</p>{momentoFormatado}
        </div>
    );
}

export default Message;