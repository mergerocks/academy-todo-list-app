import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useOnClickOutside } from 'usehooks-ts';

export const Popover = ({ className, children, onClose }) => {
  const ref = useRef(null);

  useOnClickOutside(ref, onClose);

  return (
    <div ref={ref} className={clsx(className)}>
      {children}
    </div>
  );
};

Popover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
