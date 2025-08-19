import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Input = React.forwardRef(
  (
    {
      id,
      type = 'text',
      label,
      helperText,
      errorText,
      invalid = false,
      disabled = false,
      readOnly = false,
      required = false,
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      className,
      ...props
    },
    ref
  ) => {
    const autoIdRef = useRef(
      id || `input-${Math.random().toString(36).slice(2)}`
    );
    const inputId = id || autoIdRef.current;
    const hasError = invalid || (errorText && errorText.trim() !== '');

    const inputClass = classNames(
      styles['cui-input'],
      {
        [styles['cui-input--invalid']]: hasError,
        [styles['cui-input--disabled']]: disabled,
        [styles['cui-input--readonly']]: readOnly,
      },
      className
    );

    const wrapperClass = classNames(styles['cui-input__wrapper'], {
      [styles['cui-input__wrapper--invalid']]: hasError,
      [styles['cui-input__wrapper--disabled']]: disabled,
      [styles['cui-input__wrapper--readonly']]: readOnly,
    });

    const handleChange = e => {
      if (disabled || readOnly) return;
      onChange?.(e);
    };

    const handleBlur = e => {
      onBlur?.(e);
    };

    const handleFocus = e => {
      onFocus?.(e);
    };

    return (
      <div className={wrapperClass}>
        {label && (
          <label htmlFor={inputId} className={styles['cui-input__label']}>
            {label}
            {required && (
              <span className={styles['cui-input__required']}>*</span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={
            (helperText && `${inputId}-helper`) ||
            (errorText && errorText.trim() !== '' && `${inputId}-error`) ||
            undefined
          }
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={inputClass}
          {...props}
        />

        {(helperText || (errorText && errorText.trim() !== '')) && (
          <div className={styles['cui-input__text-wrapper']}>
            {helperText && !hasError && (
              <p
                id={`${inputId}-helper`}
                className={styles['cui-input__helper-text']}
              >
                {helperText}
              </p>
            )}
            {errorText && errorText.trim() !== '' && (
              <p
                id={`${inputId}-error`}
                className={styles['cui-input__error-text']}
                role='alert'
              >
                {errorText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
    'search',
    'date',
    'time',
    'datetime-local',
    'month',
    'week',
  ]),
  label: PropTypes.node,
  helperText: PropTypes.node,
  errorText: PropTypes.node,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
