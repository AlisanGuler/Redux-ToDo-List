import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ActionTypes from "../store/actionTypes";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: todo.id,
    });
  };

  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    console.log(updated);

    dispatch({
      type: ActionTypes.DONE,
      payload: updated,
    });
  };

  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>

      <div className="d-flex justify-content-end align-items-center gap-2">
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
          Düzenle
        </button>
        <button onClick={toggleIsDone} className="btn btn-success">
          {todo.is_done ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>

        {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

export default TodoCard;
