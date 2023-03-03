import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEditable } from '../../hooks/useEditable';
import { Button } from '../Button';
import { ICON_TYPES } from '../Icon';
import { Input } from '../Input';
import styles from './EditableButton.module.css';

export const EditableButton = ({ className, children, icon, onSave }) => {
  const { inputRef, isInputActive, onBlur, onChage, value } = useEditable({
    onSave,
    cleanAfterSuccess: true,
  });

  return (
    <div className={clsx(className)}>
      {isInputActive ? (
        <Input
          ref={inputRef}
          onBlur={onBlur}
          value={value}
          onChange={onChage}
          size="small"
        />
      ) : (
        <Button
          onClick={() => setIsInputActive(true)}
          fluid
          icon={icon}
          variant="dashed">
          {children}
        </Button>
      )}
    </div>
  );
};

EditableButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(ICON_TYPES),
  onSave: PropTypes.func.isRequired,
};
