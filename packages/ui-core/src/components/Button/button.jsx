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
      color = 'primary',
      disabled = false,
      fullWidth = false,
      className,
      onClick,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const buttonClass = classNames(
      styles['cui-button'],
      styles['cui-button--variant-' + variant],
      styles['cui-button--size-' + size],
      styles['cui-button--color-' + color],
      {
        [styles['cui-button--full-width']]: fullWidth,
        [styles['cui-button--disabled']]: disabled,
      },
      className
    );

    const handleClick = e => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    // href가 있으면 a 태그로 렌더링
    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={buttonClass}
          onClick={handleClick}
          target={target}
          {...props}
        >
          {children}
        </a>
      );
    }

    // href가 없으면 button 태그로 렌더링
    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'underlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'inline']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

Button.displayName = 'Button';

export default Button;
