import { FiCheck, FiX } from 'react-icons/fi';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          <FiCheck className="icon" />
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <FiX className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
