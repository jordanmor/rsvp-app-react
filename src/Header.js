import React from 'react';
import PropTypes from 'prop-types';
import GuestForm from './GuestForm';

const Header = props => {
  return ( 
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestForm 
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        handleNameInput={props.handleNameInput}
        pendingGuest={props.pendingGuest}
      />
    </header>
   );
}

Header.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleSubmitHandler: PropTypes.func
}
 
export default Header;