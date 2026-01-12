import React, { useState, useEffect } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Auto open chat after 2 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSend = () => {
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://api.whatsapp.com/send?phone=447413074655&text=${encodedMessage}`, '_blank');
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <div className={`chat-box ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <span>Need HELP?</span>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 48 48" fill="currentColor">
                            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
                        </svg>
                    </button>
                </div>
                <div className="chat-body">
                    <p>Our support team will contact you soon!</p>
                    <div className="chat-input-wrapper">
                        <input
                            type="text"
                            placeholder="Send Your Message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="send-btn" onClick={handleSend}>
                            <svg viewBox="0 0 48 48" fill="#128C7E">
                                <path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <button className="whatsapp-float" onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 90 90" fill="currentColor">
                    <path d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z" />
                </svg>
            </button>
        </>
    );
};

export default ChatWidget;
