import React from 'react';
import PropTypes from 'prop-types';

const Images = ({
    className,
    src,
    srcset,
    alt,
    sizes,
    ...other
}) => {
    return (
        <img
        className={className}
        src={src}
        alt={alt}
        {...other}
        />
    );
};

Images.defaultProps = {
    className: ''
};

Images.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Images;

