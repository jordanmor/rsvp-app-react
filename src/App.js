import React, { Component } from 'react';
import GuestList from './GuestList';
import SearchForm from './SearchForm';

class App extends Component {

  state = {
    uniqueId: 0,
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  createNewGuest() {
    return {
      id: this.state.uniqueId + 1,
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false
    }
  }

  toggleGuestPropertyAt = (property, guestId) => {
    const guests = this.state.guests.map( guest => {
      if (guest.id === guestId) {
        guest[property] = !guest[property]
        return guest;
      }
      return guest;
    })

    this.setState({ guests });
  }

  toggleConfirmationAt = guestId =>
    this.toggleGuestPropertyAt('isConfirmed', guestId);

  toggleEditingAt = guestId =>
    this.toggleGuestPropertyAt('isEditing', guestId);

  setNameAt = (name, guestId) => {
    const guests = this.state.guests.map( guest => {
      if (guest.id === guestId) {
        guest.name = name;
        return guest;
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
  
  removeGuestAt = guestId => {
    const guests = this.state.guests.filter( guest => guest.id !== guestId);
    this.setState({ guests });
  }
  
  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      uniqueId: this.state.uniqueId + 1,
      guests: [
        this.createNewGuest(),
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
            removeGuestAt={this.removeGuestAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
