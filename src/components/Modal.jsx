import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/actionTypes";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleClick = () => {
    const newText = inputRef.current.value;

    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    dispatch({
      type: ActionTypes.DONE,
      payload: updatedTodo,
    });

    close();
  };

  return (
    <div className="modal bg-black d-block text-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">ToDo'yu Güncelle</h5>
          </div>

          <div className="modal-body my-2">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
