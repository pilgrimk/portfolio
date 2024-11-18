import React, { useState, useRef } from 'react'
import { Header, Alert, PopupButton } from '../../components'
import { data } from '../../constants'
import helpSendEmail from '../../helpers/EmailHelper'
import shortid from 'shortid'

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Use refs to access input fields directly
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPhoneRef = useRef();
  const messageRef = useRef();

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

  const validateFields = () => {
    // Check if any of the fields are empty
    if (!userNameRef.current.value || !userEmailRef.current.value || !userPhoneRef.current.value || !messageRef.current.value) {
      return false; // Return false if any field is empty
    }
    return true; // Return true if all fields are filled
  }

  const clearFormFields = () => {
    // Clear the input fields
    userNameRef.current.value = '';
    userEmailRef.current.value = '';
    userPhoneRef.current.value = '';
    messageRef.current.value = '';
  };

  const sendEmail = async () => {
    // console.log('sendEmail, entry'); 
    clearAlert();

    if (!validateFields()) {
      setAlert('error', 'You must complete required fields.');
      return;
    }

    setSending(true);

    // Collect input values using refs
    const userName = userNameRef.current.value;
    const userEmail = userEmailRef.current.value;
    const userPhone = userPhoneRef.current.value;
    const message = messageRef.current.value;

    let response = await helpSendEmail(userName, userEmail, userPhone, message);

    if (response === 'Success') {
      clearFormFields(); // Clear form fields after successful email send
      setAlert('success', 'Email sent successfully!');
    } else {
      setAlert('error', response);
    }

    setSending(false);
  };

  return (
    <>
      {alertState && (
        <Alert
          alertSeverity={alertSeverity}
          alertMessage={alertMessage}
          onClose={clearAlert}
        />
      )}
      <Header title={data.contactUs.title} />
      <div className='w-full flex items-center justify-center overflow-hidden'>
        <div className='max-w-5xl flex flex-col'>
          <div>
            {data.contactUs.info.map((info) => (
              <div key={shortid.generate()}>
                <h1 className='text-lg md:text-2xl italic m-2'>
                  {info.title}
                </h1>
                <p className='m-4'>
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full bg-accent-light-50 rounded-md p-4">
            <div className='flex flex-col'>
              <label className='py-2 font-medium'>Name</label>
              <input ref={userNameRef} className='border-2 rounded-md' type="text" name="user_name" />
              <label className='py-2 font-medium'>Email</label>
              <input ref={userEmailRef} className='border-2 rounded-md' type="email" name="user_email" />
              <label className='py-2 font-medium'>Phone</label>
              <input ref={userPhoneRef} className='border-2 rounded-md' type="phone" name="user_phone" />
              <label className='py-2 font-medium'>Message</label>
              <textarea ref={messageRef} className='min-h-40 border-2 rounded-md p-2' name="message" />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mt-4'>
              <button
                className="my-2 sm:my-4 py-2 px-4 bg-accent-dark-500 hover:bg-accent-dark-300 text-white font-bold border accent-dark-900 rounded"
                type="button"
                onClick={sendEmail} // Call sendEmail on click
                disabled={sending}>
                Send an Email!
              </button>
              <span className='font-semibold italic'>-- OR --</span>
              <PopupButton text="Click to Schedule!" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;