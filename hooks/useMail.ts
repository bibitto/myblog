import { useState } from 'react';

export const useMail = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [mail, setMail] = useState('');
    const [memo, setMemo] = useState('');

    const sendMail = async () => {
        await fetch('/api/mail', {
            method: 'POST',
            body: `
            名前：${name}

            連絡先：${mail}

            件名：${subject}

            内容：
            ${content}

            備考：
            ${memo}
            `,
        });
    };

    const resetValues = async () => {
        setName('');
    };
    return {
        setName,
        setSubject,
        setContent,
        setMail,
        setMemo,
        sendMail,
        resetValues,
    };
};
