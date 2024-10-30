import React, { useState, useRef } from 'react'
import { Header, Alert } from '../../components'
import { PopupButton } from "react-calendly";
import { data } from '../../constants'
import helpSendEmail from '../../helpers/EmailHelper'
import shortid from 'shortid'

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const form = useRef();
  const emailRef = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const CALENDAR_URL = import.meta.env.VITE_CALENDAR_URL;

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

  const sendEmail = async (e) => {
    e.preventDefault();

    clearAlert();
    setSending(true);

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const userPhone = formData.get('user_phone');
    const message = formData.get('message');

    let response = await helpSendEmail(userName, userEmail, userPhone, message);

    if (response === 'Success') {
      e.target.reset();
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
            <form className='flex flex-col'
              ref={form}
              onSubmit={sendEmail}>
              <label className='py-2 font-medium'>Name</label>
              <input className='border-2 rounded-md' type="text" name="user_name" required />
              <label className='py-2 font-medium'>Email</label>
              <input className='border-2 rounded-md' type="email" name="user_email" ref={emailRef} required />
              <label className='py-2 font-medium'>Phone</label>
              <input className='border-2 rounded-md' type="phone" name="user_phone" required />
              <label className='py-2 font-medium'>Message</label>
              <textarea className='min-h-40 border-2 rounded-md p-2' name="message" required />
              <div className='flex flex-row items-center justify-center gap-8'>
                <button
                  className="self-center bg-accent-dark-500 hover:bg-accent-dark-300
                text-white font-bold mt-4 py-2 px-4 
                border accent-dark-900 rounded"
                  type="submit"
                  value="Send"
                  disabled={sending}>
                  Send an Email!
                </button>
                <span className='font-semibold italic pt-4'>-- OR --</span>
                <PopupButton
                  url={CALENDAR_URL}
                  rootElement={document.getElementById("root")}
                  text="Click to Schedule!"
                  className="self-center bg-accent-dark-500 hover:bg-accent-dark-300
               text-white font-bold mt-4 py-2 px-4 
               border accent-dark-900 rounded"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact