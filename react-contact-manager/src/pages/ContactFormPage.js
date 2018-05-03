import React, {Component} from 'react';
import ContactForm from '../components/ContactForm';

class ContactFormPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

export default ContactFormPage;
