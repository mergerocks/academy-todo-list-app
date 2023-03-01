import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Input = ({
  className,
  id,
  name,
  type,
  placeholder,
  onChange,
  disabled,
  value,
}) => {
  return (
    <input
      value={value}
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      className={clsx(className)}
      type={type}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
};
