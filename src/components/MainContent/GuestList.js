import React from 'react';
import PropTypes from 'prop-types';
import Guest from '../Guest';
import PendingGuest from '../PendingGuest';

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
            handleConfirmation={() => props.toggleConfirmationAt(guest.id)} 
            handleToggleEditing={() => props.toggleEditingAt(guest.id)} 
            handleRemove={() => props.removeGuestAt(guest.id)}
            setName={text => props.setNameAt(text, guest.id)}
          />
      )}
    </ul>
  );
}

GuestList.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  guests: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired
}

export default GuestList;