import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
  };

  handleSubmit = (event) => {
    const userId = this.uid.value;
    const { searchUser } = this.props;

    event.preventDefault();

    if (userId) {
      searchUser(userId);
    }
  };

  render() {
    return (
      <form
        className="SearchForm"
        ref={(input) => { this.searchForm = input; }}
        onSubmit={e => this.handleSubmit(e)}
      >
        <input
          className="SearchForm__uid"
          ref={(input) => { this.uid = input; }}
          type="text"
          placeholder="Steam User ID"
        />
        <button className="SearchForm__button" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
