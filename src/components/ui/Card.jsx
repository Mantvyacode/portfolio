import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  ...props 
}) => {
  return (
    <div 
      className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
};

export default Card;
