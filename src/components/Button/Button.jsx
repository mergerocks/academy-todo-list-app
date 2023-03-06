import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ICON_TYPES, Icon } from '../Icon';
import styles from './Button.module.css';

export const Button = ({
  className,
  onClick,
  variant,
  icon,
  size,
  children,
  disabled,
  fluid,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.container,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        {
          [styles.hasIcon]: icon && variant !== 'icon',
          [styles.fluid]: fluid,
        },
        className
      )}>
      {!!icon && <Icon className={styles.icon} name={icon} />}
      {variant !== 'icon' && <span className={styles.text}>{children}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'text', 'icon', 'danger', 'dashed']),
  icon: PropTypes.oneOf(ICON_TYPES),
  size: PropTypes.oneOf(['m', 'l']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'm',
};
