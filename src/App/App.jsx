import { useState } from 'react';
import {
  Popup,
  TodoCard,
  Tag,
  Button,
  ColorDot,
  PopupDelete,
} from '../components';
import { EditableButton } from '../components/EditableButton';

export const App = function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'todo 1',
      text: 'text 1',
      done: false,
      tags: [1, 2],
    },
    {
      id: 2,
      title: 'todo 2',
      text: 'text 2',
      done: false,
      tags: [1],
    },
    {
      id: 3,
      title: 'todo 3',
      text: 'text 3',
      done: true,
      tags: [2, 3],
    },
  ]);
  const [tags, setTags] = useState([
    { id: 1, color: 'blue', name: 'work' },
    { id: 2, color: 'green', name: 'study' },
    { id: 3, color: 'red', name: 'family' },
  ]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [deleteTodoId, setDeleteTodoId] = useState(null);
  const [activeTagId, setActiveTagId] = useState(null);

  return (
    <div>
      <div>
        {tags.map((tag) => {
          return (
            <Tag
              key={tag.id}
              color={tag.color}
              active={activeTagId === tag.id}
              isEditable
              onClick={() => setActiveTagId(tag.id)}
              onSave={async (value) => {
                const copy = [...tags];
                const idx = copy.findIndex(({ id }) => id === tag.id);
                const hasMatch = tags.some(({ name }) => name === value);
                if (idx >= 0 && !hasMatch) {
                  copy.splice(idx, 1, { ...tag, name: value });
                  setTags(copy);
                  return true;
                }
                return false;
              }}
              onDelete={() => {
                const copy = [...tags];
                const idx = copy.findIndex(({ id }) => id === tag.id);
                if (idx >= 0) {
                  copy.splice(idx, 1);
                  setTags(copy);
                }
              }}>
              {tag.name}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default App;
