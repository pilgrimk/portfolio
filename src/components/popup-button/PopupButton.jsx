import React, { useState } from 'react'
import { Modal } from '../../components'

const PopupButton = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const CALENDAR_URL = import.meta.env.VITE_CALENDAR_URL;

    return (
        <>
            <button
                onClick={openModal}
                className="my-2 sm:my-4 py-2 px-4 bg-accent-dark-500 hover:bg-accent-dark-300 text-white font-bold border accent-dark-900 rounded"
            >
                {text}
            </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <h2 className="text-lg font-bold">Schedule a Meeting</h2>
                <iframe src={CALENDAR_URL} width="100%" height="500" title="Calendar"></iframe>
            </Modal>
        </>
    );
};

export default PopupButton;