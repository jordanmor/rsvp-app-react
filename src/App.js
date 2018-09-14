import React, { Component } from 'react';
import GuestList from './GuestList';
import GuestForm from './GuestForm';
import Counter from './Counter';

class App extends Component {

  state = {
    uniqueId: 0,
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  get totalInvited() {
    return this.state.guests.length;
  }

  get numberAttending() {
    return this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
      );
    }
    
    get numberUnconfirmed() {
      return this.totalInvited - this.numberAttending;
    }
    
  get numberAttending2() {
    return this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );
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

  handleNameInput = nameInput =>
    this.setState({pendingGuest: nameInput});
  
  removeGuestAt = guestId => {
    const guests = this.state.guests.filter( guest => guest.id !== guestId);
    this.setState({ guests });
  }
  
  newGuestSubmitHandler = e => {
    e.preventDefault();
    if (this.state.pendingGuest !== '') {
      this.setState({
        uniqueId: this.state.uniqueId + 1,
        guests: [
          this.createNewGuest(),
          ...this.state.guests
        ],
        pendingGuest: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <GuestForm 
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

          <Counter 
            numberAttending={this.numberAttending}
            numberUnconfirmed={this.numberUnconfirmed}
            totalInvited={this.totalInvited}
          />

          <GuestList 
            guests={this.state.guests} 
            isFiltered={this.state.isFiltered}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isPendingGuest={this.state.pendingGuest}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
