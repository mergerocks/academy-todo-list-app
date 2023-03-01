import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Popup = ({ className }) => {
  return (
    <div>
      <div className={clsx(className)}>{children}</div>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
