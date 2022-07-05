import { Component } from 'react';
import { PhoneBookForm } from './pfoneBook/pfoneBookForm';
import { ListContacts } from './listContacts/listContacts';
import { Filter } from './filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  serchName = evn => {
    this.setState(() => {
      return { name: evn };
    });
  };

  filterContacts = () => {
    const result = this.state.contacts.filter(information =>
      information.name.toLowerCase().includes(this.state.name.toLowerCase())
    );

    return result;
  };

  submitContacts = (data, checkName) => {
    let findedСoincidence = true;

    this.state.contacts.map(evn => {
      if (evn.name === checkName) {
        return (findedСoincidence = false);
      }
      ('');
    });

    if (!findedСoincidence) {
      alert(`${checkName} is already in contacts`);
      return false;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  deletePhoneItem = phoneId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== phoneId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookForm onSubmit={this.submitContacts} />

        <h2>Contacts</h2>
        <Filter serchName={this.serchName} />
        <ListContacts
          filteredContacts={this.filterContacts}
          deletePhoneItem={this.deletePhoneItem}
        />
      </div>
    );
  }
}