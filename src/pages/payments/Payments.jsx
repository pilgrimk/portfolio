import React, { useState, useEffect } from 'react';
import { Header, Alert } from '../../components';
import { data } from '../../constants';

const Payments = () => {
    // 13. State for managing alert visibility, severity, and message
    const [alertState, setAlertState] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    // 14. State for payment form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [zip, setZip] = useState('');
    const [memo, setMemo] = useState('');
    const [token, setToken] = useState(null); // Holds the payment token from API

    // URL values
    const AUTH_TOKEN_SERVER_URL = 'http://pilgrimk-001-site4.ptempurl.com/payment/get-token';
    const ACCEPTUI_URL = 'https://jstest.authorize.net/v1/AcceptUI.js';
    const AUTH_PAYMENT_URL = 'https://test.authorize.net/payment/payment';

    // 15. Helper function to set and display alert message
    const setAlert = (severity, message) => {
        setAlertState(true);
        setAlertSeverity(severity);
        setAlertMessage(message);
        window.scrollTo(0, 0);
    };

    // 16. Clears any existing alert
    const clearAlert = () => {
        setAlertState(false);
        setAlertSeverity('');
        setAlertMessage('');
    };

    // 17. Handles payment token request and manages success/failure response
    const handlePayment = async () => {
        clearAlert();

        // Validates required fields
        if (!firstName || !lastName || !paymentAmount) {
            setAlert('error', 'Please fill in all required fields.');
            return;
        }

        try {
            // 18. Requests token from server
            const response = await fetch(AUTH_TOKEN_SERVER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, zip, memo, amount: paymentAmount }),
            });

            const data = await response.json();

            // 19. Handles token response
            if (data.success) {
                setToken(data.token);
                setAlert('success', 'Token received successfully!');
            } else {
                setAlert('error', `Error: ${data.message}`);
            }
        } catch (error) {
            setAlert('error', 'Error fetching payment token.');
            console.error(error);
        }
    };

    // 20. Adds the Authorize.net script for AcceptUI when component mounts
    useEffect(() => {
        clearAlert();

        const script = document.createElement('script');
        script.src = ACCEPTUI_URL;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // 21. Dynamically creates and submits a form with the token to Authorize.net so that user do not need to have another screen to redirect to the payment screen
    const submitFormVirtually = (token) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = AUTH_PAYMENT_URL;

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'token';
        input.value = token;

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };

    // 22. Submits form automatically if token is set
    useEffect(() => {
        if (token) {
            submitFormVirtually(token);
        }
    }, [token]);

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
                    <form>
                        {/* Payment form fields */}
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
                            <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">Postal Code</label>
                            <input
                                type="number"
                                id="zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
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
                            <p className='text-[.8rem] font-medium text-gray-600'>*Include Invoice Number here, if available</p>
                        </div>
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
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
