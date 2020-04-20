import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Contact() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const handleSendEmail = event => {
    event.preventDefault();

    axios.post('/send', { ...state })
          .then(response => {
          })
          .catch(() => {
            setResult({ success: false, message: 'Something went wrong. Try again later'})
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
        <h2>Justina</h2>
        <h2>Wines</h2>
      </div>

      <div className="contact-form">
        <h2><strong>OUR</strong> ADDRESS</h2>

        <p><FontAwesomeIcon icon={ faMapMarker } /> address 1</p>
        <p><FontAwesomeIcon icon={ faEnvelope } /> address</p>
        <p><FontAwesomeIcon icon={ faPhone } /> address</p>

        <p className="mt-5">For any general inquiries, please fill in the following contact form:</p>
        <form onSubmit={ handleSendEmail }>
          <div className="d-flex">
            <div className="flex-1">
              <input className="form-control" placeholder="First Name" name="firstName" onChange={handleInputChange} value={state.firstName} />
              <input className="form-control" placeholder="Last Name" name="lastName" onChange={handleInputChange} value={state.lastName} />
              <input type="email" className="form-control" name="emailAddress" placeholder="Email" onChange={handleInputChange} value={state.EmailAddress} />
            </div>
            <div className="flex-1">
              <textarea className="form-control" placeholder="Message" name="message" onChange={handleInputChange} value={state.message} ></textarea>
            </div>
          </div>

          <div className="d-flex">
            <div className="flex-1">
              {result && (
<p className={`${result.success ? 'success' : 'error'}`}>
{result.message}
</p>
)}
            </div>
            <div className="flex-1 text-right">
              <button type="submit" className="btn btn-info"><FontAwesomeIcon icon={faPaperPlane} /> SEND</button>
            </div>

          </div>
        </form>

      </div>

      <div className="overlay"></div>
    </div>
  )
}

export default Contact
