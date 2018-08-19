import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default function SimpleSquare ({size, color}) {
    const sizeInPx = `${size}px`;
    const style = {
        width: sizeInPx,
        height: sizeInPx,
        backgroundColor: color,
    };
    return (
        <div style={style} className="Square">
        </div>
    );
};

SimpleSquare.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired,
};

SimpleSquare.defaultProps = {
    color: 'blue',
};