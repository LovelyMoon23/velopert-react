import React from 'react';
import PropTypes from 'prop-types';

const Jsx = ({ name, text, children, empty }) => {
  return (
    <>
      <div>name:{name}</div>
      <div>text:{text}</div>
      <div>children:{children}</div>
      <div>empty:{empty}</div>
    </>
  );
};

Jsx.defaultProps = {
  text: '기본이름',
};

Jsx.propTypes = {
  name: PropTypes.string,
  empty: PropTypes.string.isRequired,
};

export default Jsx;
