import { Component } from 'react';
import { DeleteButton } from './listContacts.styled';

export class ListContacts extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.filteredContacts().map(friend => {
            return (
              <li key={friend.id}>
                {friend.name}: {friend.number};
                <DeleteButton
                  onClick={() => {
                    this.props.deletePhoneItem(friend.id);
                  }}
                >
                  Delete
                </DeleteButton>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
