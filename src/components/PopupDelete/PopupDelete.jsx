import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Popup } from '../Popup';

export const PopupDelete = ({ title, onDelete, onClose }) => {
  return (
    <Popup>
      <Button onClick={onClose} variant="icon" icon="close" />
      <p>{title}</p>
      <div>
        <Button onClick={onClose} variant="text">
          Cancel
        </Button>
        <Button onClick={onDelete} variant="danger">
          Delete
        </Button>
      </div>
    </Popup>
  );
};

PopupDelete.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
};
