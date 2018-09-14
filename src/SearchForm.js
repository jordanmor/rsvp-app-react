import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => {
  return ( 
    <form onSubmit={props.newGuestSubmitHandler}>
      <input 
        type="text" 
        value={props.value}
        placeholder="Invite Someone"
        onChange={props.handleNameInput}
      />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
   );
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleSubmitHandler: PropTypes.func
}
 
export default SearchForm;