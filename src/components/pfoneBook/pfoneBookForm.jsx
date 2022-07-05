import { Component } from 'react';
import { nanoid } from 'nanoid';
import { BookForm, BookItem, BookButton } from './pfoneBook.styled';

export class PhoneBookForm extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  reset = () => {
    this.setState({ name: '', id: '', number: '' });
  };

  onChangeInput = e => {
    const { name, value } = e.target;

    this.setState(() => {
      return { [name]: value, id: nanoid() };
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state, this.state.name);

    this.reset();
  };

  render() {
    return (
      <BookForm onSubmit={this.onSubmitForm}>
        <BookItem>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeInput}
            value={this.state.name}
          />
        </BookItem>
        <BookItem>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInput}
            value={this.state.number}
          />
        </BookItem>
        <BookButton type="submit">Add contact</BookButton>
      </BookForm>
    );
  }
}
