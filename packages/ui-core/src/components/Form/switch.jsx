import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Switch = React.forwardRef(
  (
    {
      id,
      checked,
      defaultChecked,
      disabled = false,
      readOnly = false,
      label,
      name,
      value,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `switch-${name || Math.random().toString(36).slice(2)}`;

    // controlled vs uncontrolled 처리
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const currentChecked = isControlled ? checked : internalChecked;

    const switchClass = classNames(
      styles['cui-switch'],
      {
        [styles['cui-switch--checked']]: currentChecked,
        [styles['cui-switch--disabled']]: disabled,
        [styles['cui-switch--readonly']]: readOnly,
      },
      className
    );

    const wrapperClass = classNames(styles['cui-switch__wrapper'], {
      [styles['cui-switch__wrapper--disabled']]: disabled,
      [styles['cui-switch__wrapper--readonly']]: readOnly,
    });

    const handleChange = e => {
      if (disabled || readOnly) return;

      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    return (
      <div className={wrapperClass}>
        <input
          ref={ref}
          id={inputId}
          type='checkbox'
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          value={value}
          onChange={handleChange}
          className={styles['cui-switch__input']}
          {...(isControlled ? { checked } : { defaultChecked })}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={styles['cui-switch__label-wrapper']}
        >
          <span className={switchClass}>
            <span className={styles['cui-switch__thumb']} />
          </span>
          {label && (
            <span className={styles['cui-switch__label']}>{label}</span>
          )}
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Switch';

Switch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Switch;
