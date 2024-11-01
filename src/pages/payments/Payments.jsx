import React, { useState, useEffect } from 'react';
import { Header, Alert } from '../../components';
import { data } from '../../constants';

const Payments = () => {
    const [alertState, setAlertState] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);

    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [memo, setMemo] = useState('');

    const setAlert = (severity, message) => {
        setAlertState(true);
        setAlertSeverity(severity);
        setAlertMessage(message);
        window.scrollTo(0, 0);
    };

    const clearAlert = () => {
        setAlertState(false);
        setAlertSeverity('');
        setAlertMessage('');
    };

    const authData = {
        apiLoginID: import.meta.env.VITE_API_LOGIN_ID,
        clientKey: import.meta.env.VITE_API_CLIENT_KEY,
    };

    const handlePayment = () => {
        console.log('handlePayment, entry');
        clearAlert();

        if (!firstName || !lastName || !paymentAmount || !postalCode) {
            return setAlert('error', 'Please fill in all required fields.');
        }

        window.Accept.dispatchData(authData, responseHandler);
    };

    const responseHandler = (response) => {
        if (response.messages.resultCode === "Ok") {
            console.log("Payment successful:", response);
            setPaymentResponse(response); // Store response if needed
            setAlert('success', 'Payment processed successfully!');
        } else {
            console.error("Payment failed:", response.messages.message[0].text);
            setAlert('error', response.messages.message[0].text);
        }
    };

    useEffect(() => {
        clearAlert();

        // Load Accept.js script
        const script = document.createElement('script');
        script.src = "https://jstest.authorize.net/v3/AcceptUI.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {alertState && (
                <Alert
                    alertSeverity={alertSeverity}
                    alertMessage={alertMessage}
                    onClose={clearAlert}
                />
            )}
            <Header title={data.payments.title} />
            <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                <div className='max-w-xl'>
                    <h1 className='text-lg md:text-2xl italic m-2'>
                        {data.payments.subtitle}
                    </h1>
                    <p className='m-4'>
                        {data.payments.desc}
                    </p>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <form id="paymentForm">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentAmount" className="block text-gray-700 text-sm font-bold mb-2">Payment Amount</label>
                            <input
                                type="number"
                                id="paymentAmount"
                                value={paymentAmount}
                                onChange={(e) => setPaymentAmount(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="postalCode" className="block text-gray-700 text-sm font-bold mb-2">Postal Code</label>
                            <input
                                type="number"
                                id="postalCode"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="memo" className="block text-gray-700 text-sm font-bold mb-2">Memo</label>
                            <input
                                type="text"
                                id="memo"
                                value={memo}
                                onChange={(e) => setMemo(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            <p className='text-sm'>*Include Invoice Number here, if available</p>
                        </div>                        
                        <button
                            type="button"
                            id="paymentButton"
                            className="AcceptUI bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                            onClick={handlePayment}
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Payments;