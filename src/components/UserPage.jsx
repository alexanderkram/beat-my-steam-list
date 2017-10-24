import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import User from './User';

const UserPage = (props) => {
  const { user } = props;

  return (
    <div className="UserPage">
      <Header />
      <div className="UserPage__inner">
        <User details={user} />
      </div>
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.isRequired,
};

export default UserPage;
