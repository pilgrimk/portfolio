import React, { useState, useEffect } from 'react';
import { Header, Alert } from '../../components';
import { data } from '../../constants';

const Payments = () => {
    const [alertState, setAlertState] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);

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
        window.Accept.dispatchData(authData, responseHandler);
    };

    const responseHandler = (response) => {
        // console.log(response);
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
            <form id="paymentForm">
                <button
                    type="button"
                    id="paymentButton"
                    className="AcceptUI"
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            </form>
        </>
    );
};

export default Payments;