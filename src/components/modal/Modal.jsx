import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 shadow-lg relative max-w-3xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 rounded-full hover:bg-gray-200 p-1"
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;