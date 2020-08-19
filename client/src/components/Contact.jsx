import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Alerter from './Alerter';

function Contact() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendErrors] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: ''
  });

  function handleSuccessMessage() {
      setSuccess(true)
      setState({
        firstName: '', lastName: '', emailAddress: '', message: ''
      })
      toggleSending(false);
      setTimeout(() => { setSuccess(false) }, 3000);
  }

  function handleValidationErrors() {
    setErrors(true)
    setTimeout(() => { setErrors(false) }, 3000);
  }

  function handleSendingErrors() {
    setSendErrors(true)
    toggleSending(false);
    setTimeout(() => { setSendErrors(false) }, 3000);
  }

  function toggleSending(bool) {
    setSending(bool);
  }

  const handleSendEmail = event => {
    event.preventDefault();

    if (!state.firstName || !state.lastName || !state.emailAddress || !state.message) {
      handleValidationErrors();
      return;
    }

    toggleSending(true);

    axios.post('/send', { ...state })
          .then(response => {
            if (response.data.success) {
              handleSuccessMessage();
            }
          })
          .catch(() => {
            handleSendingErrors()
          });
    }

  const handleInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return(
    <div id='contact'>
      <div className="side-callout">
        <h2 className="font-weight-bold">Contact</h2>
        <h2>WINES</h2>
        <h2>ADVISORS</h2>
      </div>

      <div className="contact-form">
        <h2><strong>OUR</strong> ADDRESS</h2>

        <a href="https://www.google.com/maps/place/770%20L%20Street%20Suite%20950%20Sacramento,%20CA%2095814" target="_blank"><FontAwesomeIcon icon={ faMapMarker } /> <span className="ml-2">770 L Street Suite 950 Sacramento, CA 95814</span></a>
        <a href="mailto:justin@winesadvisors.com"><FontAwesomeIcon icon={ faEnvelope } /> <span className="ml-2">justin@winesadvisors.com</span></a>
        <a href="tel:5205956079"><FontAwesomeIcon icon={ faPhone } /> <span className="ml-2">(520)595-6079</span></a>

        <p className="mt-5">For any general inquiries, please fill in the following contact form:</p>
        <form onSubmit={ handleSendEmail }>
          <div className="d-flex">
            <div className="flex-1">
              <input className="form-control" placeholder="First Name" name="firstName" onChange={handleInputChange} value={state.firstName} />
              <input className="form-control" placeholder="Last Name" name="lastName" onChange={handleInputChange} value={state.lastName} />
              <input type="email" className="form-control" name="emailAddress" placeholder="Email" onChange={handleInputChange} value={state.emailAddress} />
            </div>
            <div className="flex-1">
              <textarea className="form-control" placeholder="Message" name="message" onChange={handleInputChange} value={state.message} ></textarea>
            </div>
          </div>

          <div className="d-flex">
            <div className="flex-1">
              { sending && 'sending...' }
            </div>
            <div className="flex-1 text-right">
              <button type="submit" disabled={sending} className="btn btn-info"><FontAwesomeIcon icon={faPaperPlane} /> SEND</button>
            </div>

          </div>
        </form>
        <Alerter message="Thanks for contacting us. We will get back to you shortly" danger={false} show={success} />
        <Alerter message="Please complete all fields" danger={true} show={errors} />
        <Alerter message="Something went wrong. Please try again." danger={true} show={sendError} />
      </div>

      <div className="overlay"></div>
    </div>
  )
}

export default Contact
