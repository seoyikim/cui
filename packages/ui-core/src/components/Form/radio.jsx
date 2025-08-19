import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Radio = React.forwardRef(
  (
    {
      id,
      name,
      value,
      checked,
      defaultChecked,
      disabled = false,
      invalid = false,
      readOnly = false,
      label,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const autoIdRef = useRef(
      id || `radio-${name || 'x'}-${Math.random().toString(36).slice(2)}`
    );
    const inputId = id || autoIdRef.current;

    const radioClass = classNames(
      styles['cui-radio'],
      {
        [styles['cui-radio--checked']]: checked,
        [styles['cui-radio--disabled']]: disabled,
        [styles['cui-radio--readonly']]: readOnly,
      },
      className
    );

    const wrapperClass = classNames(styles['cui-radio__wrapper'], {
      [styles['cui-radio__wrapper--disabled']]: disabled,
      [styles['cui-radio__wrapper--invalid']]: invalid,
      [styles['cui-radio__wrapper--readonly']]: readOnly,
    });

    const handleChange = e => {
      if (disabled || readOnly) return;
      onChange?.(e, value);
    };

    return (
      <div className={wrapperClass}>
        <input
          ref={ref}
          id={inputId}
          type='radio'
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid || undefined}
          onChange={handleChange}
          className={styles['cui-radio__input']}
          {...props}
        />
        <label htmlFor={inputId} className={styles['cui-radio__label-wrapper']}>
          <span className={radioClass}>
            {checked && <span className={styles['cui-radio__dot']} />}
          </span>
          {label && <span className={styles['cui-radio__label']}>{label}</span>}
        </label>
      </div>
    );
  }
);

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Radio.displayName = 'Radio';
export default Radio;
