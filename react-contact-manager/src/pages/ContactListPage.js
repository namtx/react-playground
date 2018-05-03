import React, {Component} from 'react';
import ContactList from '../components/ContactList';

class ContactListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default ContactListPage;
