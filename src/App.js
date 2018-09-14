import React, { Component } from 'react';
import GuestList from './GuestList';
import SearchForm from './SearchForm';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Harry',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Hermione',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Ron',
        isConfirmed: false,
        isEditing: true
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    const guests = this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return {
          ...guest,
          [property]: !guest[property]
        }
      }
      return guest;
    })

    this.setState({ guests });
  }

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt('isConfirmed', index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name, indexToChange) => {
    const guests = this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return {
          ...guest,
          name
        }
      }
      return guest;
    })

    this.setState({ guests });
  }

  toggleFilter = () => 
    this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guests.length;

  handleNameInput = nameInput =>
    this.setState({pendingGuest: nameInput});
  
  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <SearchForm 
            newGuestSubmitHandler={this.newGuestSubmitHandler}
            handleNameInput={e => this.handleNameInput(e.target.value)}
            value={this.state.pendingGuest}
          />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> 
              Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <GuestList 
            guests={this.state.guests} 
            isFiltered={this.state.isFiltered}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isPendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
