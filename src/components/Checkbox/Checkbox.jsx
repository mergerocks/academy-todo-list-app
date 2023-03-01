import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

export const Checkbox = ({ className, children, checked, onChange }) => {
  return (
    <label className={clsx(className)}>
      <input
        checked={checked}
        onChange={() => onChange(!checked)}
        type="checkbox"
      />
      <span>
        <Icon name="check" />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};
