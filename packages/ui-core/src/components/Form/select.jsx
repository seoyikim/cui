import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.module.scss';

const Select = React.forwardRef(
  (
    {
      id,
      mode = 'native', // 'native' | 'custom'
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
      children,
      ...props
    },
    ref
  ) => {
    const autoIdRef = useRef(
      id || `select-${Math.random().toString(36).slice(2)}`
    );
    const inputId = id || autoIdRef.current;
    const hasError = invalid || (errorText && errorText.trim() !== '');

    // 커스텀 모드 상태
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const selectRef = useRef(null);

    // 옵션 파싱 (커스텀 모드용)
    const parseOptions = useCallback(() => {
      const options = [];
      React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.type === 'option') {
          options.push({
            value: child.props.value,
            label: child.props.children,
            disabled: child.props.disabled,
          });
        }
      });
      return options;
    }, [children]);

    const options = useMemo(() => parseOptions(), [children]);

    // 선택된 옵션 찾기 (커스텀 모드용)
    useEffect(() => {
      const selected = options.find(option => option.value === value);
      setSelectedOption(selected);
    }, [value, options]);

    // 외부 클릭 감지 (커스텀 모드용)
    useEffect(() => {
      const handleClickOutside = event => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
          document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    // 네이티브 모드 핸들러
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

    // 커스텀 모드 핸들러
    const handleCustomClick = () => {
      if (disabled || readOnly) return;
      setIsOpen(!isOpen);
    };

    const handleOptionSelect = option => {
      if (option.disabled) return;

      setSelectedOption(option);
      onChange?.({ target: { value: option.value } });
      setIsOpen(false);
    };

    const selectClass = classNames(
      styles['cui-select'],
      {
        [styles['cui-select--invalid']]: hasError,
        [styles['cui-select--disabled']]: disabled,
        [styles['cui-select--readonly']]: readOnly,
        [styles['cui-select--open']]: isOpen,
        [styles['cui-select--custom']]: mode === 'custom', // 이 부분이 누락되었을 수 있습니다!
      },
      className
    );

    const wrapperClass = classNames(styles['cui-select__wrapper'], {
      [styles['cui-select__wrapper--invalid']]: hasError,
      [styles['cui-select__wrapper--disabled']]: disabled,
      [styles['cui-select__wrapper--readonly']]: readOnly,
    });

    // 네이티브 모드 렌더링
    if (mode === 'native') {
      return (
        <div className={wrapperClass}>
          {label && (
            <label htmlFor={inputId} className={styles['cui-select__label']}>
              {label}
              {required && (
                <span className={styles['cui-select__required']}>*</span>
              )}
            </label>
          )}

          <select
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
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
            className={selectClass}
            {...props}
          >
            {placeholder && (
              <option value='' disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>

          {(helperText || (errorText && errorText.trim() !== '')) && (
            <div className={styles['cui-select__text-wrapper']}>
              {helperText && !hasError && (
                <p
                  id={`${inputId}-helper`}
                  className={styles['cui-select__helper-text']}
                >
                  {helperText}
                </p>
              )}
              {errorText && errorText.trim() !== '' && (
                <p
                  id={`${inputId}-error`}
                  className={styles['cui-select__error-text']}
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

    // 커스텀 모드 렌더링
    return (
      <div className={wrapperClass} ref={selectRef}>
        {label && (
          <label
            htmlFor={inputId}
            className={styles['cui-select__label']}
            onClick={() => !disabled && !readOnly && setIsOpen(!isOpen)}
          >
            {label}
            {required && (
              <span className={styles['cui-select__required']}>*</span>
            )}
          </label>
        )}

        <div className={styles['cui-select__container']}>
          <div
            ref={ref}
            id={inputId}
            tabIndex={disabled || readOnly ? -1 : 0}
            className={selectClass}
            onClick={handleCustomClick}
            onFocus={onFocus}
            onBlur={onBlur}
            role='combobox'
            aria-expanded={isOpen}
            aria-haspopup='listbox'
            aria-controls={`${inputId}-listbox`}
            aria-invalid={hasError || undefined}
            aria-describedby={
              (helperText && `${inputId}-helper`) ||
              (errorText && errorText.trim() !== '' && `${inputId}-error`) ||
              undefined
            }
            {...props}
          >
            <span className={styles['cui-select__value']}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className={styles['cui-select__arrow']} />
          </div>

          {isOpen && (
            <div className={styles['cui-select__dropdown']}>
              <ul
                id={`${inputId}-listbox`}
                role='listbox'
                className={styles['cui-select__options']}
              >
                {options.map(option => (
                  <li
                    key={option.value}
                    role='option'
                    aria-selected={selectedOption?.value === option.value}
                    className={classNames(styles['cui-select__option'], {
                      [styles['cui-select__option--selected']]:
                        selectedOption?.value === option.value,
                      [styles['cui-select__option--disabled']]: option.disabled,
                    })}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {(helperText || (errorText && errorText.trim() !== '')) && (
          <div className={styles['cui-select__text-wrapper']}>
            {helperText && !hasError && (
              <p
                id={`${inputId}-helper`}
                className={styles['cui-select__helper-text']}
              >
                {helperText}
              </p>
            )}
            {errorText && errorText.trim() !== '' && (
              <p
                id={`${inputId}-error`}
                className={styles['cui-select__error-text']}
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

Select.propTypes = {
  id: PropTypes.string,
  mode: PropTypes.oneOf(['native', 'custom']),
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
  children: PropTypes.node,
};

Select.displayName = 'Select';

export default Select;
