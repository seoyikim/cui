import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';
import Radio from './radio';

const RadioGroup = React.forwardRef(
  (
    {
      name,
      value,
      defaultValue,
      onChange,
      options,
      children,
      disabled = false,
      invalid = false,
      direction = 'column',
      gap = 'medium',
      readOnly = false,
      className,
      ...props
    },
    ref
  ) => {
    const groupClass = classNames(
      styles['cui-radio-group'],
      styles[`cui-radio-group--${direction}`],
      styles[`cui-radio-group--${gap}`],
      {
        [styles['cui-radio-group--disabled']]: disabled,
        [styles['cui-radio-group--invalid']]: invalid,
        [styles['cui-radio-group--readonly']]: readOnly,
      },
      className
    );

    const handleChange = (event, optionValue) => {
      if (disabled || readOnly) {
        return;
      }
      if (onChange) {
        onChange(event, optionValue);
      }
    };

    const renderOptions = () => {
      if (options) {
        return options.map((option, index) => (
          <Radio
            key={option.value || index}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            disabled={disabled || option.disabled}
            invalid={invalid || option.invalid}
            onChange={handleChange}
          />
        ));
      }
      return children;
    };

    return (
      <div ref={ref} className={groupClass} {...props}>
        {renderOptions()}
      </div>
    );
  }
);

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
      invalid: PropTypes.bool,
    })
  ),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.oneOf(['small', 'medium', 'large']),
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
