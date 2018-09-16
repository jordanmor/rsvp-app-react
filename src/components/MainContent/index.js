import React from 'react';
import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';
import PropTypes from 'prop-types';

const MainContent = props => {
  return ( 
    <div className="main">

      <ConfirmedFilter 
        toggleFilter={props.toggleFilter}
        isFiltered={props.isFiltered}
      />

      <Counter 
        numberAttending={props.numberAttending}
        numberUnconfirmed={props.numberUnconfirmed}
        totalInvited={props.totalInvited}
      />

      <GuestList 
        guests={props.guests} 
        isFiltered={props.isFiltered}
        toggleConfirmationAt={props.toggleConfirmationAt}
        toggleEditingAt={props.toggleEditingAt}
        setNameAt={props.setNameAt}
        removeGuestAt={props.removeGuestAt}
        pendingGuest={props.pendingGuest}
      />

    </div>
   );
}

MainContent.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
  guests: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired
}
 
export default MainContent;