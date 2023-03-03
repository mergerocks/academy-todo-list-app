import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import styles from './Checkbox.module.css';

export const Checkbox = ({ className, children, checked, onChange }) => {
  return (
    <label className={clsx(styles.container, className)}>
      <input
        checked={checked}
        className={styles.input}
        onChange={() => onChange(!checked)}
        type="checkbox"
      />
      <span className={styles.checkbox}>
        <Icon className={styles.icon} name="check" />
      </span>
      {children && <span className={styles.text}>{children}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};
