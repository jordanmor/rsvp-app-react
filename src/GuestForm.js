import React from 'react';
import PropTypes from 'prop-types';

const GuestForm = props => {
  return ( 
    <form onSubmit={props.newGuestSubmitHandler}>
      <input 
        type="text" 
        value={props.pendingGuest}
        placeholder="Invite Someone"
        onChange={props.handleNameInput}
      />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
   );
}

GuestForm.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleSubmitHandler: PropTypes.func
}
 
export default GuestForm;