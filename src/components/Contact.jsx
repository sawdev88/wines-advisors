import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [inputs, setInputs] = useState({});
  const [formErrors, validateForm] = useState(false);

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidateFrom();
  }

  const handleValidateFrom = () => {
    if (inputs.firstName && inputs.lastName && inputs.emailAddress && inputs.message) {
      validateForm(false);
      alert('send')
    } else {
      validateForm(true);
    }
  }

  return(
    <div id='contact'>
      <div className="side-callout">
        <h2 className="font-weight-bold">Contact</h2>
        <h2>Justina</h2>
        <h2>Wines</h2>
      </div>

      <div className="contact-form">
        <h2><strong>OUR</strong> ADDRESS</h2>

        <p><FontAwesomeIcon icon={ faMapMarker } /> address</p>
        <p><FontAwesomeIcon icon={ faEnvelope } /> address</p>
        <p><FontAwesomeIcon icon={ faPhone } /> address</p>

        <p className="mt-5">For any general inquiries, please fill in the following contact form:</p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className="flex-1">
              <input className="form-control" placeholder="First Name" name="firstName" onChange={handleInputChange} value={inputs.firstName} />
              <input className="form-control" placeholder="Last Name" name="lastName" onChange={handleInputChange} value={inputs.lastName} />
              <input type="email" className="form-control" name="emailAddress" placeholder="Email" onChange={handleInputChange} value={inputs.EmailAddress} />
            </div>
            <div className="flex-1">
              <textarea className="form-control" placeholder="Message" name="message" onChange={handleInputChange} value={inputs.message} ></textarea>
            </div>
          </div>

          <div className="d-flex">
            <div className="flex-1">
              <h5 className="form-errors mr-auto d-inline-block">{ formErrors ? '* please fill out all fields' : '' }</h5>
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
