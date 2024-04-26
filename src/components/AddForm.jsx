import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import ActionTypes from "../store/actionTypes";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

  

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    console.log(newTodo);

    dispatch({
      type: ActionTypes.ADD,
      payload: newTodo,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="Örn: Typescript Projesi"
        type="text"
      />
      <button className="btn btn-danger">Gönder</button>
    </form>
  );
};

export default AddForm;
