import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useEditable } from '../../hooks/useEditable';
import { Button } from '../Button';
import { ColorDot } from '../ColorDot';
import { Input } from '../Input';
import styles from './Tag.module.css';

export const Tag = ({
  className,
  children,
  onClick,
  active,
  color,
  onSave,
  onDelete,
  isEditable,
}) => {
  const { inputRef, isInputActive, onBlur, onChage, value, setIsInputActive } =
    useEditable({
      onSave,
    });

  useEffect(() => {
    onChage(children);
  }, [children]);

  const renderEditableContent = () => {
    if (isEditable && isInputActive) {
      return (
        <Input
          className={styles.input}
          ref={inputRef}
          onBlur={onBlur}
          value={value}
          onChange={onChage}
        />
      );
    }
    if (isEditable && !isInputActive) {
      return (
        <div className={styles.actions}>
          <Button
            className={styles.actionButton}
            onClick={() => setIsInputActive(true)}
            variant="icon"
            icon="pencil"
          />
          <Button
            className={styles.actionButton}
            onClick={onDelete}
            variant="icon"
            icon="trash"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={clsx(
        styles.container,
        { [styles.active]: active },
        className
      )}>
      <div className={styles.inner}>
        <ColorDot className={styles.color} color={color} />
        <button
          aria-label="tag-button"
          className={styles.button}
          onClick={onClick}
        />
        <span className={styles.text}>{children}</span>
      </div>
      {renderEditableContent()}
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
};
