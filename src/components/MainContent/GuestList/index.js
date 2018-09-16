import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => {
  return (
    <ul>
      <PendingGuest name={props.pendingGuest} />
      {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest) =>
          <Guest 
            key={guest.id} 
            name={guest.name} 
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => props.toggleConfirmation(guest.id)} 
            handleToggleEditing={() => props.toggleEditing(guest.id)} 
            handleRemove={() => props.removeGuest(guest.id)}
            setName={text => props.setName(text, guest.id)}
          />
      )}
    </ul>
  );
}

GuestList.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  guests: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}

export default GuestList;