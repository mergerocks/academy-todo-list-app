import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ICON_TYPES, Icon } from '../Icon';

export const Button = ({
  className,
  onClick,
  variant,
  icon,
  size,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, styles[variant], styles[size], {
        [style.hasIcon]: icon && variant !== 'icon',
      })}>
      {!!icon && <Icon name={icon} />}
      {variant !== 'icon' && <span>{children}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'text', 'icon', 'danger', 'dashed']),
  icon: PropTypes.oneOf(ICON_TYPES),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'm',
};
