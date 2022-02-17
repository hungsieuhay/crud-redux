import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../redux/todoList/todoAction";

TodoForm.propTypes = {};

function TodoForm() {
  const [value, setValue] = useState("");

  const todoList = useSelector((state) => state.todo.todoList);
  const isAdd = useSelector((state) => state.todo.isAdd);
  const todoUpdate = useSelector((state) => state.todo.todoUpdated);

  const dispatch = useDispatch();

  const inputValueRef = useRef();

  useEffect(() => {
    setValue(todoUpdate.name);
  }, [todoUpdate]);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd) {
      if (value !== "") {
        const formValues = {
          id: todoList.length + 1,
          name: value,
        };
        dispatch(action.addTodo(formValues));
        setValue("");
        inputValueRef.current.focus();
      } else {
        inputValueRef.current.focus();
      }
    } else {
      const updateTodo = {
        id: todoUpdate.id,
        name: value,
      };
      dispatch(action.updateTodo(updateTodo));
      setValue("");
    }
  };

  return (
    <form>
      <input
        ref={inputValueRef}
        value={value}
        onChange={handleChangeInput}
        type="text"
        placeholder="Name"
      />
      <button onClick={handleSubmit}>{isAdd ? "Add" : "Save"}</button>
    </form>
  );
}

export default TodoForm;
