import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./todoForm";
import * as action from "../../redux/todoList/todoAction";

TodoList.propTypes = {};

function TodoList(props) {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(action.removeTodo(id));
  };
  const handleEdit = (todo) => {
    dispatch(action.editTodo(todo));
  };

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <li>{todo.name}</li>
            <button onClick={() => handleDelete(todo.id)}>DELETE</button>
            <button onClick={() => handleEdit(todo)}>EDIT</button>
          </div>
        ))}
      </ul>
      <TodoForm />
    </div>
  );
}

export default TodoList;
