import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ColorDot } from '../ColorDot';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';
import styles from './TodoCard.module.css';

export const TodoCard = ({
  className,
  title,
  text,
  tags,
  done,
  onDoneChange,
  onDelete,
  onEdit,
}) => {
  return (
    <article className={clsx(styles.container, className)}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.row}>
          <Button
            className={styles.actionButton}
            onClick={onEdit}
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
      </header>
      <p className={styles.text}>{text}</p>
      <footer className={styles.footer}>
        <div className={styles.colorList}>
          {tags.map(({ color, id }) => (
            <ColorDot className={styles.color} key={id} color={color} />
          ))}
        </div>
        <Checkbox checked={done} onChange={onDoneChange}>
          Done
        </Checkbox>
      </footer>
    </article>
  );
};

TodoCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDoneChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      color: PropTypes.string.isRequired,
    })
  ),
};

TodoCard.defaultProps = {
  tags: [],
};
