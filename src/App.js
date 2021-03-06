import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  uniqueId = 0;

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
    const newGuest = {
      id: this.uniqueId,
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false
    };

    this.uniqueId++;

    return newGuest;
  }

  toggleGuestProperty = (property, id) => {
    const guests = this.state.guests.map( guest => {
      if (guest.id === id) {
        guest[property] = !guest[property]
        return guest;
      }
      return guest;
    })

    this.setState({ guests });
  }

  toggleConfirmation = id =>
    this.toggleGuestProperty('isConfirmed', id);

  toggleEditing = id =>
    this.toggleGuestProperty('isEditing', id);

  setName = (name, id) => {
    const guests = this.state.guests.map( guest => {
      if (id === guest.id) {
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
  
  removeGuest = id => {
    const guests = this.state.guests.filter( guest => id !== guest.id);
    this.setState({ guests });
  }
  
  newGuestSubmitHandler = e => {
    e.preventDefault();
    if (this.state.pendingGuest !== '') {
      this.setState({
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
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={e => this.handleNameInput(e.target.value)}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent 
          toggleFilter={this.toggleFilter}
          numberAttending={this.numberAttending}
          numberUnconfirmed={this.numberUnconfirmed}
          totalInvited={this.totalInvited}
          guests={this.state.guests} 
          isFiltered={this.state.isFiltered}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
