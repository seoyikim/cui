import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = React.forwardRef(
  (
    {
      children,
      variant = 'contained',
      size = 'medium',
      width,
      height,
      color = 'primary',
      disabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      styles.button,
      styles[variant],
      styles[size],
      styles[color],
      {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.displayName = 'Button';

export default Button;
