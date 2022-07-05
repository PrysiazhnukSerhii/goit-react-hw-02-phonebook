import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            onChange={e => {
              this.props.serchName(e.target.value);
            }}
          />
        </label>
      </form>
    );
  }
}
