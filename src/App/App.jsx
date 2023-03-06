import { useMemo, useState } from 'react';

import { TodoCard, Tag, Button, PopupDelete, PopupEdit } from '../components';
import { EditableButton } from '../components/EditableButton';
import { useTags } from '../hooks/useTags';
import { deleteItemFromArray, editItemInArray } from '../utils';

export const App = function App() {
  const tagsState = useTags();
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
  const [editTodoId, setEditTodoId] = useState(null);
  const [deleteTodoId, setDeleteTodoId] = useState(null);
 
  const todoEditing = useMemo(() => {
    if (editTodoId === 'new') {
      return {};
    }
    return todos.find(({ id }) => id === editTodoId);
  }, [editTodoId, todos]);


  const onSaveTodo = (newTodo) => {
    editItemInArray({
      item: { id: editTodoId, ...newTodo },
      list: todos,
      setState: setTodos,
      onCleanup: setEditTodoId,
    });
  };

  const onCreateTodo = (newTodo) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        done: false,
        ...newTodo,
      },
    ]);
    setEditTodoId(null);
  };

  const onDeleteTodo = () =>
    deleteItemFromArray({
      list: todos,
      id: deleteTodoId,
      setState: setTodos,
      onCleanup: setDeleteTodoId,
    });

  return (
    <>
      {tagsState.delitingId && (
        <PopupDelete
          title="Do you really want to delete this tag?"
          onClose={() => tagsState.setDelitingId(null)}
          onDelete={tagsState.delete}
        />
      )}
      {deleteTodoId && (
        <PopupDelete
          title="Do you really want to delete this tag?"
          onClose={() => setDeleteTodoId(null)}
          onDelete={onDeleteTodo}
        />
      )}
      {!!todoEditing && (
        <PopupEdit
          title={todoEditing?.title}
          text={todoEditing?.text}
          tags={tagsState.data}
          selectedTags={todoEditing?.tags}
          onClose={() => setEditTodoId(null)}
          onSave={editTodoId === 'new' ? onCreateTodo : onSaveTodo}
        />
      )}
      <div>
        <header>
          <h1>TODO App</h1>
          <Button
            icon="plus"
            variant="icon"
            onClick={() => setEditTodoId('new')}
          />
        </header>
        <div>
          {tagsState.data.map((tag) => {
            return (
              <Tag
                key={tag.id}
                color={tag.color}
                active={tagsState.activeId === tag.id}
                isEditable
                onClick={() => tagsState.setActiveId(tag.id)}
                onSave={(name) => tagsState.update({ ...tag, name })}
                onDelete={() => tagsState.setDelitingId(tag.id)}>
                {tag.name}
              </Tag>
            );
          })}
          <EditableButton onSave={tagsState.create} icon="plus">
            Add new
          </EditableButton>
        </div>
        <div>
          {todos.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                done={todo.done}
                onDelete={() => setDeleteTodoId(todo.id)}
                onDoneChange={(done) => onSaveTodo({ ...todo, done })}
                onEdit={() => setEditTodoId(todo.id)}
                text={todo.text}
                title={todo.title}
                tags={tagsState.getParsedTags(todo.tags)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
