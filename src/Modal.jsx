import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="modal-container">
            <button className="open-modal-btn" onClick={toggleModal}>
                Open Modal
            </button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Modal Title</h2>
                        <p>This is a modal window.</p>
                        <button className="close-modal-btn" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
