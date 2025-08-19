import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Checkbox = React.forwardRef(
  (
    {
      id,
      checked,
      defaultChecked,
      disabled = false,
      invalid = false,
      readOnly = false,
      label,
      name,
      value,
      onChange,
      className,
      icon,
      checkedIcon,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `checkbox-${name || Math.random().toString(36).slice(2)}`;

    const checkboxClass = classNames(
      styles['cui-checkbox'],
      {
        [styles['cui-checkbox--checked']]: checked,
        [styles['cui-checkbox--disabled']]: disabled,
        [styles['cui-checkbox--readonly']]: readOnly,
      },
      className
    );

    const wrapperClass = classNames(styles['cui-checkbox__wrapper'], {
      [styles['cui-checkbox__wrapper--disabled']]: disabled,
      [styles['cui-checkbox__wrapper--invalid']]: invalid,
      [styles['cui-checkbox__wrapper--readonly']]: readOnly,
    });

    const handleChange = e => {
      if (disabled || readOnly) return;
      onChange?.(e);
    };

    return (
      <div className={wrapperClass}>
        <input
          ref={ref}
          id={inputId}
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          value={value}
          onChange={handleChange}
          className={styles['cui-checkbox__input']}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={styles['cui-checkbox__label-wrapper']}
        >
          <span className={checkboxClass}>
            {checked
              ? checkedIcon ?? (
                  <svg
                    className={styles['cui-checkbox__icon']}
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
                  </svg>
                )
              : icon ?? null}
          </span>
          {label && (
            <span className={styles['cui-checkbox__label']}>{label}</span>
          )}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
};

export default Checkbox;
