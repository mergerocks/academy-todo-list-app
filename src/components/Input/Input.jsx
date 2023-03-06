import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(
  (
    {
      className,
      id,
      name,
      type,
      placeholder,
      onChange,
      disabled,
      value,
      size,
      onBlur,
      onEnterPress,
    },
    ref
  ) => {
    const onKeyUp = (e) => {
      if (e.keyCode === 13 && onEnterPress) {
        onEnterPress();
      }
    };

    return (
      <input
        ref={ref}
        value={value}
        name={name}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(className, styles[size])}
        type={type}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  onBlur: PropTypes.func,
  onEnterPress: PropTypes.func,
};

Input.defaultProps = {
  size: 'large',
};
