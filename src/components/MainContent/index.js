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
        toggleConfirmation={props.toggleConfirmation}
        toggleEditing={props.toggleEditing}
        setName={props.setName}
        removeGuest={props.removeGuest}
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
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}
 
export default MainContent;