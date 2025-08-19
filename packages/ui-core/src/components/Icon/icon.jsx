import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './icon.module.scss';

const Icon = React.forwardRef(
  ({ children, width, height, className, style, url, ...props }, ref) => {
    const iconClass = classNames(
      styles['cui-icon'],
      {
        [styles['cui-icon--background']]: url,
      },
      className
    );

    const iconStyle = {
      ...(width && { width }),
      ...(height && { height }),
      ...(url && { backgroundImage: `url(${url})` }),
      ...style,
    };

    return (
      <i ref={ref} className={iconClass} style={iconStyle} {...props}>
        {children}
      </i>
    );
  }
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,
};

export default Icon;
