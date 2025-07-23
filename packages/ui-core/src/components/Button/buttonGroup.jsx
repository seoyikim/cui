import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const ButtonGroup = React.forwardRef(
  (
    {
      children,
      orientation = 'horizontal',
      spacing = 'medium',
      justifyContent = 'start',
      className,
      ...props
    },
    ref
  ) => {
    const groupClass = classNames(
      styles['cui-button-group'],
      styles['cui-button-group--orientation-' + orientation],
      styles['cui-button-group--spacing-' + spacing],
      styles['cui-button-group--justify-' + justifyContent],
      className
    );

    return (
      <div ref={ref} className={groupClass} {...props}>
        {children}
      </div>
    );
  }
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  justifyContent: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
  ]),
  className: PropTypes.string,
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
