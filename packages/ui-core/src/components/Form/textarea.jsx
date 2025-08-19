import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Textarea = React.forwardRef(
  (
    {
      id,
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
      rows = 3,
      cols,
      maxLength,
      minLength,
      onChange,
      onBlur,
      onFocus,
      className,
      ...props
    },
    ref
  ) => {
    const autoIdRef = useRef(
      id || `textarea-${Math.random().toString(36).slice(2)}`
    );
    const textareaId = id || autoIdRef.current;
    const hasError = invalid || (errorText && errorText.trim() !== '');

    const textareaClass = classNames(
      styles['cui-textarea'],
      {
        [styles['cui-textarea--invalid']]: hasError,
        [styles['cui-textarea--disabled']]: disabled,
        [styles['cui-textarea--readonly']]: readOnly,
      },
      className
    );

    const wrapperClass = classNames(styles['cui-textarea__wrapper'], {
      [styles['cui-textarea__wrapper--invalid']]: hasError,
      [styles['cui-textarea__wrapper--disabled']]: disabled,
      [styles['cui-textarea__wrapper--readonly']]: readOnly,
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
          <label htmlFor={textareaId} className={styles['cui-textarea__label']}>
            {label}
            {required && (
              <span className={styles['cui-textarea__required']}>*</span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          minLength={minLength}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={
            (helperText && `${textareaId}-helper`) ||
            (errorText && errorText.trim() !== '' && `${textareaId}-error`) ||
            undefined
          }
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={textareaClass}
          {...props}
        />

        {(helperText || (errorText && errorText.trim() !== '')) && (
          <div className={styles['cui-textarea__text-wrapper']}>
            {helperText && !hasError && (
              <p
                id={`${textareaId}-helper`}
                className={styles['cui-textarea__helper-text']}
              >
                {helperText}
              </p>
            )}
            {errorText && errorText.trim() !== '' && (
              <p
                id={`${textareaId}-error`}
                className={styles['cui-textarea__error-text']}
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

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  helperText: PropTypes.node,
  errorText: PropTypes.node,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
};

Textarea.displayName = 'Textarea';

export default Textarea;
