import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  todos: Todo[];
  onAdd: (newTodoTitle: string) => void;
  inputLoading: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  toggleAll: () => void;
}

export const Header: React.FC<Props> = ({
  onAdd,
  todos,
  inputLoading,
  query,
  setQuery,
  inputRef,
  toggleAll,
}) => {
  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(query);
  };

  return (
    <header className="todoapp__header">
      {todos.length > 0 && (
        <button
          type="button"
          className={
            'todoapp__toggle-all ' +
            (todos.every(({ completed }) => completed) ? 'active' : '')
          }
          data-cy="ToggleAllButton"
          onClick={toggleAll}
        />
      )}

      <form onSubmit={handleAddTodo}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          ref={inputRef}
          value={query}
          onChange={event => setQuery(event.target.value.trimStart())}
          disabled={inputLoading}
        />
      </form>
    </header>
  );
};
